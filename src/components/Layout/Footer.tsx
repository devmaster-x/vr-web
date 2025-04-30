"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="flex justify-center items-center">
        <Image
          src="/assets/logo/footer_logo.png"
          alt="Footer-Logo"
          priority={true}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      <p>© 2025 V-RANGERS PTE. LTD.</p>
    </footer>
  );
};

export default Footer;
