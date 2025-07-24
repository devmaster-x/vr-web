import React from "react";
import { About, News, Details_works } from "../details";
import Detail_cards from "./Detail_cards";

const Details: React.FC = () => {
  return (
    <div id="details">
      <div className="flex flex-col gap-12 md:gap-18 xl:gap-24 pt-12 md:pt-18 px-4 md:px-[5%]" style={{
        backgroundImage: 'url("/assets/details/main/background_image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <About />
        <News />
        <Details_works />
        <Detail_cards />
      </div>
    </div>
  );
};

export default Details;
