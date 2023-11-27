import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const navLinks = [
    { title: "About", path: "/" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <nav className="w-full position-fixed top-0 left-0 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto p-2  ">
        <Link href="/" className="text-3xl font-semibold">
          LOGO
        </Link>
        <div className="menu md:block md:w-auto md:order-1">
          <ul className="flex p-4 md:p-0 md:flex-row ">
            {navLinks.map((link) => (
              <NavLinks key={link.title} href={link.path} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
