'use client'
import React, { useEffect, useState } from "react";

const About: React.FC = () => {
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
  if(width < 800) return (
    <div id="about" className="w-full">
      <img 
        src="assets/details/about/about.png"
        alt="about image" 
        className="w-full h-full"
      />
    </div>
  )

  return (
    <div
      id="about"
      className="flex items-center w-full h-[500px] lg:h-[600px] relative" style={{
        backgroundImage: 'url("/assets/details/about/background_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "white"
      }}
    >
      <div className="flex flex-col justify-between w-1/2 p-5 gap-4">
        <div className="relative mb-5 flex justify-center">
          <video className="w-full xl:w-4/5" controls>
            <source src="path/to/your/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col gap-2 text-sm lg:text-md font-semibold">
          <p>VOXEL RANGERSは、グラフィックデザインからWEBデザイン、映像制作などデザインを主業とするプロフェッショナルが集結したクリエイティブチームです。</p>
          <p>また、3Dアートやアニメーション、エクスペリエンスデザイン、アバター制作、NFTアセット制作など、メタバース空間の分野でも活動しています。</p>
        </div>

        <h2 className="text-2xl font-bold pt-6">VOXEL RANGERS</h2>
      </div>

      <div className="flex w-1/2 h-full">
        <div className="flex flex-col w-full h-full relative py-8 gap-0">
          <div className="flex w-full h-full justify-between">
            <div id="title" className="relative w-1/2 px-4">
              <img src="assets/details/about/description.png" className="pt-4"/>
            </div>

            <div id="right-panel" className="flex flex-col items-center relative w-1/2">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold">ABOUT</h1>
              <div className="flex w-full justify-end relative">
                <div className="text-lg lg:text-2xl font-semibold transform rotate-90 translate-x-[80%]" style={{
                  transformOrigin: 'left bottom',
                }}>
                  <span className="pr-2">CREATIVE</span>
                  <span>TEAM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center -mt-4 lg:-mt-10 xl:-mt-16 2xl:-mt-52">
            <img src="assets/details/about/toys.png" alt="Toys" className="w-[90%]" />
            <img src="assets/details/button.png" alt="Button" className="absolute w-32 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col justify-end bg-transparent w-10 relative border-l-1 border-[#959392]">
          <div className="absolute transform rotate-90 text-white py-2 px-4 bg-[#c69c6d] translate-x-10 w-fit font-semibold" style={{
            transformOrigin: 'left top',
            top: '0',
            left: '0',
          }}>
            <span className="pr-2">VOXEL</span>
            <span>RANGERS</span>
          </div>

          <div className="bg-black w-10 h-10">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;