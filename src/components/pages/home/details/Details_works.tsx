'use client'
import React from "react";

const Works: React.FC = () => {
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
    <div className="text-black p-2 md:p-4">
      {/* <h1 className="text-5xl font-bold text-center mb-10 text-white">WORKS</h1> */}

      {/* Mobile images (visible on small screens) - Single column */}
      <div className="md:hidden">
        {mobile_images.map((images, index) => (
          <img 
            src={images} 
            key={index} 
            alt={`design image ${index}`} 
            className="w-full h-auto mb-2 md:mb-4"
          />
        ))}
      </div>
      
      {/* Desktop images (visible on large screens) - 2 columns */}
      <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-8">
        {web_images.map((images, index) => (
          <img 
            src={images} 
            key={index} 
            alt={`design image ${index}`} 
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
