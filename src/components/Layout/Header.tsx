"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-white flex items-center justify-between px-10 py-4 fixed z-50">
      {/* Logo */}
      <Image
        src="/assets/logo/logo.png"
        alt="Voxel Rangers Logo"
        onClick={() => router.push("/")}
        width={150}
        height={40}
        className="object-contain cursor-pointer"
      />

      <div className="flex items-center gap-4">
        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link href="/#about" className="text-[#760069] uppercase font-bold text-sm hover:text-purple-300 transition cursor-pointer">ABOUT</Link>
          <Link href="/#news" className="text-[#760069] uppercase font-bold text-sm hover:text-purple-300 transition cursor-pointer">NEWS</Link>
          <Link href="/works" className="text-[#760069] uppercase font-bold text-sm hover:text-purple-300 transition cursor-pointer">WORKS</Link>
          <Link href="/#partners" className="text-[#760069] uppercase font-bold text-sm hover:text-purple-300 transition cursor-pointer">PARTNERS</Link>
          <Link href="/#teams" className="text-[#760069] uppercase font-bold text-sm hover:text-purple-300 transition cursor-pointer">CREATIVE TEAM</Link>
          <Link href="/members" className="text-[#760069] uppercase font-bold text-sm hover:text-purple-300 transition cursor-pointer">MEMBERS</Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="bg-[#760069] text-white px-6 py-2 uppercase font-bold text-sm cursor-pointer"
        >
          CONTACT
        </Link>

        {/* Language Toggle */}
        <button className="bg-black text-white px-6 py-2 uppercase font-bold text-sm cursor-pointer">
          JP / EN
        </button>
      </div>
    </header>
  );
};

export default Header;
