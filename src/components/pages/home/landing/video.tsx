'use client'
import React from "react";
import Link from "next/link";

const Landing_video: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full h-full"
      style={{
        backgroundImage: 'url(/assets/landing/video/updated_video.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 flex flex-col text-white">
        <div className="flex flex-col justify-center h-4/5 mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-wide">VIDEO</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide">PRODUCTION</h2>
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
    </div>
  );
};

export default Landing_video;
