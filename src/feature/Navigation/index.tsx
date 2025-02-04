import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";

export default function Navigation() {
  return (
    <div className="px-24 grow-0">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <Link className="flex" href="/">
            <Image
              className="h-8 w-auto"
              src="/logo.svg"
              alt="Your Logo"
              width={32}
              height={32}
            />
            <h1 className="text-black font-mono text-lg">FitTravel</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <NavLink url="/" text="Home" />
            <NavLink url="/map" text="Find gym" />
            <NavLink url="/knowledge" text="Knowledge" />
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="/user.png"
                    alt="User Avatar"
                    width={64}
                    height={64}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="-mr-2 flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
