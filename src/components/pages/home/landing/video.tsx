'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Landing_video: React.FC = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth); // set once on mount
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const getFontSize = (baseSize: number) => {
    if (width < 480) return baseSize * 0.3;
    if (width < 768) return baseSize * 0.5;
    if (width < 1200) return baseSize * 0.75;
    return Math.round(baseSize);
  };

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
              fontSize: `${getFontSize(20)}rem`,
              margin: 0,
              fontWeight: 'bold',
              letterSpacing: '0.1rem',
              marginBottom: '-4rem',
            }}>VIDEO</h1>
            <h2 style={{
              fontSize: `${getFontSize(6)}rem`,
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
