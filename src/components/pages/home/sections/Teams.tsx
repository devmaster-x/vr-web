import React from "react";

const Teams: React.FC = () => {
  return (
    <div id="teams" className="bg-red-700 text-white py-6 md:py-8 px-4 md:px-[5%]">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10">CREATIVE TEAM</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center gap-4">
        <div className="text-center w-full sm:w-1/4">
          <img src="/assets/team/iza.png" alt="IZA Voxelab" className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 rounded-full object-cover" />
          <p className="font-bold text-base md:text-lg">IZA Voxelab</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">HP</a>
          </div> */}
        </div>
        <div className="text-center w-full sm:w-1/4">
          <img src="/assets/team/next.png" alt="NEXT PX" className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 rounded-full object-cover" />
          <p className="font-bold text-base md:text-lg">NEXT PX</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
          </div> */}
        </div>
        <div className="text-center w-full sm:w-1/4">
          <img src="/assets/team/powpads.png" alt="PowPads Lab" className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 rounded-full object-cover" />
          <p className="font-bold text-base md:text-lg">PowPads Lab</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Teams;
