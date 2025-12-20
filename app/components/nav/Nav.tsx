"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className=" text-white font-sans flex items-center justify-around p-4 w-full bg-transparent">
      {/* الصورة والاسم على اليسار */}
      <div className="flex items-center gap-3">
        <Image
          src="/nav.png"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        {/* <h1 className="text-xl font-bold">Fares Mohamed Hassan</h1> */}
      </div>

      {/* الروابط على اليمين */}
      <div className="flex gap-6 text-lg">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
