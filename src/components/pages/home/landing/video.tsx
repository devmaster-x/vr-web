import React from "react";
import Link from "next/link";

const Landing_video: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full h-full"
      style={{
        backgroundImage: 'url(/assets/landing/video/main.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 flex flex-col text-white">
        <div className="flex flex-col justify-center h-4/5 mx-auto">
          <div className="flex flex-col items-center">
            <h1 style={{
              fontSize: '20rem',
              margin: 0,
              fontWeight: 'bold',
              letterSpacing: '0.1rem',
              marginBottom: '-5rem',
            }}>VIDEO</h1>
            <h2 style={{
              fontSize: '6rem',
              margin: 0,
              fontWeight: 'bold',
              letterSpacing: '0.1rem',
            }}>PRODUCTION</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            href="/works"
            className="mt-4 px-12 py-3 border-2 border-[#0468b2] bg-[#222668] rounded-md text-white uppercase font-bold tracking-wider cursor-pointer relative z-10"
          >
            WORKS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing_video;
