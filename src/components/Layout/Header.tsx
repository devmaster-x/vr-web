"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BarsIcon } from "./BarsIcon"; // You must provide this component
import { TimesIcon } from "./TimesIcon"; // You must provide this component
import { scrollToSection } from "@/lib/scrollUtils";

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#news", label: "NEWS" },
  { href: "/works", label: "WORKS" },
  { href: "/#partners", label: "PARTNERS" },
  { href: "/#teams", label: "CREATIVE TEAM" },
  { href: "/members", label: "MEMBERS" },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="w-full bg-white flex items-center justify-between px-10 py-4 fixed z-50">
      {/* Logo (hidden on mobile) */}
      <div className="flex items-center">
        <Image
          src="/assets/logo/logo.png"
          alt="Voxel Rangers Logo"
          onClick={() => router.push("/")}
          width={150}
          height={40}
          className="object-contain cursor-pointer hidden md:block"
        />
        {/* Hamburger menu (mobile only) */}
        <button
          className="md:hidden p-2"
          aria-label="Open navigation menu"
          onClick={() => setShowNav(true)}
        >
          <BarsIcon />
        </button>
      </div>

      {/* Nav links and actions (hidden on mobile) */}
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith('/#');
            const elementId = isHashLink ? link.href.substring(2) : null;
            
            return isHashLink ? (
              <button
                key={link.href}
                onClick={() => scrollToSection(elementId!)}
                className="text-[#760069] uppercase font-bold min-w-fit text-sm hover:text-purple-300 transition cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#760069] uppercase font-bold min-w-fit text-sm hover:text-purple-300 transition cursor-pointer"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* CONTACT and JP/EN buttons are now always visible */}
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-[#760069] text-white px-6 py-2 uppercase font-bold min-w-fit text-sm cursor-pointer"
        >
          CONTACT
        </button>
        <button className="bg-black text-white px-6 py-2 uppercase font-bold min-w-fit text-sm cursor-pointer">
          JP / EN
        </button>
      </div>

      {/* Mobile nav overlay */}
      {showNav && (
  <div className="fixed top-0 left-0 h-full w-64 bg-[#22223b] text-white flex flex-col z-50 shadow-lg">
    {/* Close button at the top right of the drawer */}
    <div className="flex justify-end p-4">
      <button
        className="p-2 w-8 h-8"
        aria-label="Close navigation menu"
        onClick={() => setShowNav(false)}
      >
        <TimesIcon />
      </button>
    </div>
    {/* Navigation links */}
    <nav className="flex flex-col gap-6 text-lg px-6">
      {navLinks.map((link) => {
        const isHashLink = link.href.startsWith('/#');
        const elementId = isHashLink ? link.href.substring(2) : null;
        
        return isHashLink ? (
          <button
            key={link.href}
            onClick={() => {
              scrollToSection(elementId!);
              setShowNav(false);
            }}
            className="hover:text-purple-300 transition text-left"
          >
            {link.label}
          </button>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setShowNav(false)}
            className="hover:text-purple-300 transition"
          >
            {link.label}
          </Link>
        );
      })}
      <button
        onClick={() => {
          scrollToSection('contact');
          setShowNav(false);
        }}
        className="bg-[#760069] text-white px-4 py-2 rounded uppercase font-bold w-fit text-sm cursor-pointer mt-4"
      >
        CONTACT
      </button>
      <button className="bg-black text-white px-4 py-2 rounded uppercase font-bold w-fit text-sm cursor-pointer mt-2">
        JP / EN
      </button>
    </nav>
  </div>
)}
    </header>
  );
};

export default Header;