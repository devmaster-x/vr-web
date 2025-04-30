"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Landing_main: React.FC = () => {
  return (
    <div className="relative w-full h-full" style={{
      backgroundImage: 'url("/assets/landing/main/main.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 1,
    }}>

      <div className="flex flex-col items-center justify-center h-4/5">
        <div className="relative flex flex-row items-center pl-14">
          {/* VOXEL text */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mr-8">VOXEL</h1>

          {/* VA Logo */}
          <div className="relative" style={{ width: '30vw', height: '50vh' }}>
            <Image
              src="/assets/landing/main/VR.png"
              alt="VR Logo"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-contain"
            />
          </div>

          {/* RANGERS text */}
          <h1 className="text-white text-3xl md:text-5xl font-bold ml-8">RANGERS</h1>
        </div>
      </div>
      {/* Members button */}
      <div className="flex flex-col items-center justify-center">
        <Link
          href="/members"
          className="mt-4 px-12 py-3 border-2 border-[#0468b2] bg-[#222668] rounded-md text-white uppercase font-bold tracking-wider cursor-pointer relative z-10"
        >
          MEMBERS
        </Link>
      </div>
    </div>
  );
};

export default Landing_main;
