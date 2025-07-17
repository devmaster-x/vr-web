import React from "react";
import Link from "next/link";
import Image from "next/image";

const Landing_web: React.FC = () => {
  return (
    <div
      id="home"
      className="landing_web_page relative w-full h-full"
      style={{
        backgroundImage: 'url("/assets/landing/web/main.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
    >
      <div className="absolute inset-0 flex flex-col text-white">
        <div className="flex flex-col justify-center h-4/5 mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-8xl xl:text-9xl font-bold pt-32 pb-4">WEB DESIGN</h1>
            <p className="text-2xl xl:text-4xl font-bold">あなたのブランドを引き立す</p>
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

export default Landing_web;
