"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { data as blogData } from "../../_mock/blog/index";

type Blog = {
  id: string;
  title: string;
  desc: string;
  content: string;
  image: string;
};

const BlogPage = () => {
  const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreTriggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleBlogs(blogData.slice(0, 0));
  }, []);

  const loadMoreBlogs = useCallback(() => {
    setVisibleBlogs((prevBlogs) => {
      const currentCount = prevBlogs.length;
      const newBlogs = blogData.slice(currentCount, currentCount + 5);

      const uniqueNewBlogs = newBlogs.filter(
        (newBlog) => !prevBlogs.some((blog) => blog.id === newBlog.id)
      );

      return [...prevBlogs, ...uniqueNewBlogs];
    });
  }, []);

  useEffect(() => {
    if (!loadMoreTriggerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          loadMoreBlogs();
        }
      },
      { rootMargin: "100px" }
    );

    observerRef.current.observe(loadMoreTriggerRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loadMoreBlogs]);

  return (
    <>
      {visibleBlogs.length > 0 && (
        <div
          className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center px-10 py-20 text-white"
          style={{
            backgroundImage: `url(${visibleBlogs[0].image})`,
          }}
        >
          <h2 className="text-4xl font-bold bg-black/50 px-4 py-2 rounded">
            {visibleBlogs[0].title}
          </h2>
          <p className="mt-4 text-lg bg-black/40 px-4 py-2 rounded">
            {visibleBlogs[0].desc}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-24 py-20">
        {visibleBlogs.slice(1).map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 bg-white shadow"
          >
            <h3 className="text-xl font-semibold text-green-600">
              {blog.title}
            </h3>
            <p className="text-black">{blog.desc}</p>
          </div>
        ))}
      </div>

      <div ref={loadMoreTriggerRef} className="h-10"></div>
    </>
  );
};

export default BlogPage;
