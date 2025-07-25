"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 md:p-6">
      <div className="flex justify-center items-center">
        <Image
          src="/assets/logo/footer_logo.png"
          alt="Footer-Logo"
          priority={true}
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      <p className="mt-4 text-sm md:text-base">© 2025 V-RANGERS PTE. LTD.</p>
    </footer>
  );
};

export default Footer;
