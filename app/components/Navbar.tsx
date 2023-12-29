"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import React, { useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Say Hello !", path: "/contact" },
  ];

  return (
    <nav className="w-full position-fixed top-0 left-0 z-10 bg-opacity-100 bg-slate-800 pt-2">
      <div className="flex flex-wrap justify-between items-center mx-auto p-2  ">
        <Link href="/" className="text-3xl font-semibold">
          <HomeIcon className="h-7 w-7 " />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 px-2  text-slate-200 border rounded border-slate-200  "
            >
              <Bars3Icon className="h-9  w-7  " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2 px-2 text-slate-200 border rounded border-slate-200 "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden  md:block md:w-auto md:order-1">
          <ul className="flex p-4 md:p-0 md:flex-row ">
            {navLinks.map((link) => (
              <NavLinks key={link.title} href={link.path} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
export default Navbar;
