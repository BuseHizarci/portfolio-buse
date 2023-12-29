"use client";
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const meta = {
    title: "Manu Arora - Developer, Writer, Creator and YouTuber",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  const metaTags = [
    { name: "robots", content: "follow, index" },
    { name: "description", content: meta.description },
    { property: "og:type", content: meta.type },
    { property: "og:site_name", content: "Manu Arora" },
    { property: "og:description", content: meta.description },
    { property: "og:title", content: meta.title },
    { property: "og:image", content: meta.image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@mannupaaji" },
    { name: "twitter:title", content: meta.title },
    { name: "twitter:description", content: meta.description },
    { name: "twitter:image", content: meta.image },
    ...(meta.date
      ? [{ property: "article:published_time", content: meta.date }]
      : []),
  ];

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        {metaTags.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}
      </Head>
      <main className="bg-slate-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
