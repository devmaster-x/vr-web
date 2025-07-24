import React from "react";

const Teams: React.FC = () => {
  return (
    <div id="teams" className="bg-red-700 text-white py-8 md:py-10 px-4 md:px-[5%]">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16">CREATIVE TEAM</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center gap-8 md:gap-4">
        <div className="text-center w-full sm:w-1/3">
          <img src="/assets/team/iza.png" alt="IZA Voxelab" className="w-32 h-32 md:w-52 md:h-52 mx-auto mb-4 rounded-full object-cover" />
          <p className="font-bold text-lg md:text-xl">IZA Voxelab</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">HP</a>
          </div> */}
        </div>
        <div className="text-center w-full sm:w-1/3">
          <img src="/assets/team/next.png" alt="NEXT PX" className="w-32 h-32 md:w-52 md:h-52 mx-auto mb-4 rounded-full object-cover" />
          <p className="font-bold text-lg md:text-xl">NEXT PX</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
          </div> */}
        </div>
        <div className="text-center w-full sm:w-1/3">
          <img src="/assets/team/powpads.png" alt="PowPads Lab" className="w-32 h-32 md:w-52 md:h-52 mx-auto mb-4 rounded-full object-cover" />
          <p className="font-bold text-lg md:text-xl">PowPads Lab</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Teams;
