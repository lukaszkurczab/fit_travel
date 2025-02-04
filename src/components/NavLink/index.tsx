import Link from "next/link";

import { FC } from "react";

interface NavLinkProps {
  url: string;
  text: string;
}

const NavLink: FC<NavLinkProps> = ({ url, text }) => {
  return (
    <Link
      href={url}
      className="border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-m font-medium hover:border-orange-500"
    >
      {text}
    </Link>
  );
};

export default NavLink;
