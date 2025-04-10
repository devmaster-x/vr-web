import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="py-1">
        <Image
          src="/assets/logo/footer_logo.png"
          alt="Footer-Logo"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      <p>© 2025 V-RANGERS PTE. LTD.</p>
    </footer>
  );
};

export default Footer;
