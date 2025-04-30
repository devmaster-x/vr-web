import React from "react";
import Link from "next/link";
import Image from "next/image";

const Landing_voxel: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full h-full"
      style={{
        backgroundImage: 'url("/assets/landing/voxel/main.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      <div className="flex flex-col justify-center h-4/5"></div>
      <div className="flex flex-col items-center justify-center">
        <Link
          href="/works"
          className="mt-4 px-12 py-3 border-2 border-[#0468b2] bg-[#222668] rounded-md text-white uppercase font-bold tracking-wider cursor-pointer relative z-10"
        >
          WORKS
        </Link>
      </div>
    </div>
  );
};

export default Landing_voxel;
