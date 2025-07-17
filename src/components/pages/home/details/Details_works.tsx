'use client'
import React, { useEffect, useState } from "react";

const Works: React.FC = () => {
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

  const web_images = [
    "/assets/details/works/web/graphic.png",
    "/assets/details/works/web/web.png",
    "/assets/details/works/web/voxel.png",
    "/assets/details/works/web/video.png",
  ];

  const mobile_images = [
    "/assets/details/works/mobile/graphic.png",
    "/assets/details/works/mobile/web.png",
    "/assets/details/works/mobile/voxel.png",
    "/assets/details/works/mobile/video.png",
  ];

  return (
    <div className="text-black p-8">
      {/* <h1 className="text-5xl font-bold text-center mb-10 text-white">WORKS</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {width < 1024 
          ? mobile_images.map((images, index) => <img src={images} key={index} alt={`design image ${index}`} className="w-full h-full"/>) 
          : web_images.map((images, index) => <img src={images} key={index} alt={`design image ${index}`} className="w-full h-full"/>) 
        }
      </div>
    </div>
  );
};

export default Works;
