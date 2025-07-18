import React from "react";

const Teams: React.FC = () => {
  return (
    <div id="teams" className="bg-red-700 text-white py-10 px-[5%]">
      <h1 className="text-center text-5xl font-bold mb-16">CREATIVE TEAM</h1>
      <div className="flex flex-wrap justify-around items-center">
        <div className="text-center w-1/3">
          <img src="/assets/team/iza.png" alt="IZA Voxelab" className="md:w-52 md:h-52 w-36 h-36 mx-auto mb-4 rounded-full" />
          <p className="font-bold">IZA Voxelab</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">HP</a>
          </div> */}
        </div>
        <div className="text-center w-1/3">
          <img src="/assets/team/next.png" alt="NEXT PX" className="md:w-52 md:h-52 w-36 h-36 mx-auto mb-4 rounded-full" />
          <p className="font-bold">NEXT PX</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
          </div> */}
        </div>
        <div className="text-center w-1/3">
          <img src="/assets/team/powpads.png" alt="PowPads Lab" className="md:w-52 md:h-52 w-36 h-36 mx-auto mb-4 rounded-full" />
          <p className="font-bold">PowPads Lab</p>
          {/* <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-white border border-white px-2 py-1 rounded-full w-28">X</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Teams;
