import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[80px] bg-white shadow-md flex items-center justify-between px-10">
      {/* Logo */}
      <div className="py-1">
        <Image
          src="/assets/logo/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex gap-10 items-center">
        {/* Navigation Links */}
        <nav className="text-[#760069] text-[16px] font-bold uppercase font-['Mplus1PBold-Bold'] leading-4 flex gap-6">
          <Link href='#about' className="cursor-pointer hover:text-[#A1008F] transition">about</Link>
          <Link href='#news' className="cursor-pointer hover:text-[#A1008F] transition">news</Link>
          <Link href='/works' className="cursor-pointer hover:text-[#A1008F] transition">works</Link>
          <Link href='#partners' className="cursor-pointer hover:text-[#A1008F] transition">partners</Link>
          <Link href='#team' className="cursor-pointer hover:text-[#A1008F] transition">creative team</Link>
          <Link href='/members' className="cursor-pointer hover:text-[#A1008F] transition">members</Link>
        </nav>

        <Link href="/contact" className="text-white text-[16px] font-bold uppercase leading-6 bg-[#760069] px-6 py-2 rounded-sm">CONTACT</Link>
        <button className="text-white text-[16px] font-bold uppercase leading-6 bg-black px-6 py-2 rounded-sm">JP / EN</button>
      </div>
    </header>
  );
};

export default Header;
