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

      <div className="flex flex-col items-center justify-center h-4/5 px-4">
        <div className="relative flex flex-col sm:flex-row items-center justify-center text-center sm:text-left sm:pl-4 md:pl-14">
          {/* VOXEL text */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0 sm:mr-4 md:mr-8">VOXEL</h1>

          {/* VA Logo */}
          <div className="relative mb-4 sm:mb-0" style={{ width: '60vw', height: '30vh', maxWidth: '300px', maxHeight: '200px' }}>
            <Image
              src="/assets/landing/main/VR.png"
              alt="VR Logo"
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, 30vw"
              className="object-contain"
            />
          </div>

          {/* RANGERS text */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:ml-4 md:ml-8">RANGERS</h1>
        </div>
      </div>
      {/* Members button */}
      <div className="flex flex-col items-center justify-center">
        {/* <Link
          href="/members"
          className="mt-4 px-12 py-3 border-2 border-[#0468b2] bg-[#222668] rounded-md text-white uppercase font-bold tracking-wider cursor-pointer relative z-10"
        >
          MEMBERS
        </Link> */}
      </div>
    </div>
  );
};

export default Landing_main;
