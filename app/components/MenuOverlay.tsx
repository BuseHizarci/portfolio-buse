import React from "react";
import Link from "next/link";

interface LinkItem {
  path: string;
  title: string;
  total: number;
}

interface MenuOverlayProps {
  links: LinkItem[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <>
      <ul className="flex flex-col p-4 py-4 bg-transparent rounded-lg items-center">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuOverlay;
