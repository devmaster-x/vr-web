import React, { useState, useEffect } from "react";
import { 
  Landing_Main,
  Landing_Web,
  Landing_Graphic,
  Landing_Video,
  Landing_Voxel,
} from "@/components/pages/home";

const Landing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
    const flowPage = () => {
      setCurrentIndex((currentIndex + 1) % 5);
    }

    const timerId = setInterval(flowPage, 3000);
    return clearInterval(timerId)
  },[])
  return (
    <>
      {currentIndex === 0 && <Landing_Main /> }
      {currentIndex === 1 && <Landing_Graphic /> }
      {currentIndex === 2 && <Landing_Web /> }
      {currentIndex === 3 && <Landing_Video /> }
      {currentIndex === 4 && <Landing_Voxel /> }
    </>
  );
};

export default Landing;
