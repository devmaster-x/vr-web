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
  // { href: "/works", label: "WORKS" },
  { href: "/#partners", label: "PARTNERS" },
  { href: "/#teams", label: "CREATIVE TEAM" },
  // { href: "/members", label: "MEMBERS" },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="w-full bg-white flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 fixed z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/assets/logo/logo.png"
          alt="Voxel Rangers Logo"
          onClick={() => router.push("/")}
          width={150}
          height={40}
          className="object-contain cursor-pointer hidden sm:block"
        />
        {/* Mobile Logo */}
        <Image
          src="/assets/logo/logo.png"
          alt="Voxel Rangers Logo"
          onClick={() => router.push("/")}
          width={120}
          height={32}
          className="object-contain cursor-pointer sm:hidden"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-2 md:gap-4">
        <nav className="hidden md:flex gap-4 lg:gap-6">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith('/#');
            const elementId = isHashLink ? link.href.substring(2) : null;
            
            return isHashLink ? (
              <button
                key={link.href}
                onClick={() => scrollToSection(elementId!)}
                className="text-[#760069] uppercase font-bold min-w-fit text-xs lg:text-sm hover:text-purple-300 transition cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#760069] uppercase font-bold min-w-fit text-xs lg:text-sm hover:text-purple-300 transition cursor-pointer"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Desktop Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#760069] text-white px-3 md:px-6 py-2 uppercase font-bold min-w-fit text-xs lg:text-sm cursor-pointer hover:bg-[#5a004f] transition-colors"
          >
            CONTACT
          </button>
          <button className="bg-black text-white px-3 md:px-6 py-2 uppercase font-bold min-w-fit text-xs lg:text-sm cursor-pointer hover:bg-gray-800 transition-colors">
            JP / EN
          </button>
        </div>
      </div>

      {/* Mobile Menu Button - Now on the right side */}
      <button
        className="sm:hidden p-2"
        aria-label="Open navigation menu"
        onClick={() => setShowNav(true)}
      >
        <BarsIcon />
      </button>

      {/* Modern Mobile nav overlay */}
      {showNav && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 backdrop-blur-sm z-50 sm:hidden">
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out">
            {/* Modern Header with Logo and Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gradient-to-r from-[#760069] to-[#9d4edd]">
              <Image
                src="/assets/logo/logo.png"
                alt="Voxel Rangers Logo"
                width={120}
                height={32}
                className="object-contain filter brightness-0 invert"
              />
              <button
                className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
                aria-label="Close navigation menu"
                onClick={() => setShowNav(false)}
              >
                <TimesIcon />
              </button>
            </div>
            
            {/* Navigation links with modern styling */}
            <nav className="flex flex-col flex-grow p-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => {
                  const isHashLink = link.href.startsWith('/#');
                  const elementId = isHashLink ? link.href.substring(2) : null;
                  
                  return isHashLink ? (
                    <button
                      key={link.href}
                      onClick={() => {
                        scrollToSection(elementId!);
                        setShowNav(false);
                      }}
                      className="w-full text-left py-4 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-lg font-semibold group-hover:text-purple-300 transition-colors">
                        {link.label}
                      </span>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mt-1"></div>
                    </button>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setShowNav(false)}
                      className="block w-full text-left py-4 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-lg font-semibold group-hover:text-purple-300 transition-colors">
                        {link.label}
                      </span>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mt-1"></div>
                    </Link>
                  );
                })}
              </div>
            </nav>
            
            {/* Modern Action Buttons */}
            <div className="p-6 space-y-4 border-t border-gray-700">
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setShowNav(false);
                }}
                className="w-full bg-gradient-to-r from-[#760069] to-[#9d4edd] text-white py-4 px-6 rounded-xl uppercase font-bold text-sm cursor-pointer hover:from-[#5a004f] hover:to-[#7c3aed] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONTACT
              </button>
              <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-xl uppercase font-bold text-sm cursor-pointer hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                JP / EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;