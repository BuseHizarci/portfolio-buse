import React from "react";
import Link from "next/link";
const NavLinks = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-2 pr-2 mr-2  text-slate-500 rounded-lg  border-2 border-violet-700 hover:bg-violet-700 place-self-center  "
    >
      {title}
    </Link>
  );
};

export default NavLinks;
