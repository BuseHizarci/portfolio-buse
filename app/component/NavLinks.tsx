import React from "react";
import Link from "next/link";
const NavLinks = ({ href, title }) => {
  return (
    <Link href={href} className="block py-3 pl-4 pr-4 ">
      {title}
    </Link>
  );
};

export default NavLinks;
