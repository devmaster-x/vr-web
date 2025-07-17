import React from "react";
import Link from "next/link";
import Image from "next/image";

const Landing_graphic: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full h-full"
      style={{
        backgroundImage: 'url("/assets/landing/graphic/main.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 flex flex-col text-white">
        <div className="flex flex-col justify-center h-4/5 w-1/2">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl xl:text-8xl font-bold pt-32">GRAPHIC</h1>
            <h1 className="text-6xl xl:text-8xl font-bold pl-24 pb-6">DESIGN</h1>
            <p className="mt-4 text-2xl xl:text-4xl">他にはない、</p>
            <p className="mt-4 text-2xl xl:text-4xl pl-4">ユニークな</p>
            <p className="mt-4 text-2xl xl:text-4xl pl-20">デザインを。</p>
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

export default Landing_graphic;
