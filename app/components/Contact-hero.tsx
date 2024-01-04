import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaMedium,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/busehizarci",
    label: "Github",
    handle: "busehizarci",
  },
  {
    icon: <FaMedium size={20} />,
    href: "https://bhzrc.medium.com/",
    label: "Medium",
    handle: "@bhzrc",
  },
  {
    icon: <FaMailBulk size={20} />,
    href: "mailto:buse.application[at]gmail.com",
    label: "Email",
    handle: "buse.hzrci@gmail.com",
  },
];

const ContactHero = () => {
  return (
    <section className="bg-slate-800">
      <div className="max-w-6xl mx-auto bg-slate-800">
        <h1 className="text-5xl md:text-9xl font-bold py-8 md:py-20 text-center md:text-left">
          Contact!
        </h1>
      </div>
      <div className="bg-slate-900">
        <div className="max-w-6xl mx-auto py-8 md:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <div
                key={s.label}
                className="max-w-sm p-6 bg-slate-800 border border-slate-800 rounded-lg shadow mb-8 sm:mb-0"
              >
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
