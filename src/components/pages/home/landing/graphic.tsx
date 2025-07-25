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
        <div className="flex flex-col justify-center h-4/5 w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold pt-16 md:pt-32 text-center md:text-left">GRAPHIC</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold pb-6 text-center md:text-left md:pl-24">DESIGN</h1>
            <div className="text-center md:text-left">
              <p className="mt-4 text-lg sm:text-xl md:text-2xl xl:text-4xl">他にはない、</p>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl xl:text-4xl md:pl-4">ユニークな</p>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl xl:text-4xl md:pl-20">デザインを。</p>
            </div>
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
