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
      <div className="flex flex-col justify-center h-4/5 px-4">
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">VOXEL</h1>
          <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">3Dアートの世界へ</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* <Link
          href="/works"
          className="mt-4 px-12 py-3 border-2 border-[#0468b2] bg-[#222668] rounded-md text-white uppercase font-bold tracking-wider cursor-pointer relative z-10"
        >
          WORKS
        </Link> */}
      </div>
    </div>
  );
};

export default Landing_voxel;
