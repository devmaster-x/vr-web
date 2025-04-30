"use client";
import React, { useState, useEffect } from "react";
import {
  Landing_Main,
  Landing_Web,
  Landing_Graphic,
  Landing_Video,
  Landing_Voxel,
} from "@/components/pages/home";

// Reusable component for each landing section
const LandingSection: React.FC<{ index: number; currentIndex: number; Component: React.FC }> = ({ index, currentIndex, Component }) => (
  <div
    style={{
      position: "absolute",
      width: "100%",
      height: 'calc(100vh - 80px)',
      transition: "opacity 1s ease-in-out",
      opacity: currentIndex === index ? 1 : 0,
    }}
  >
    <Component />
  </div>
);

const Landing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const flowPage = () => {
      setCurrentIndex((currentIndex + 1) % 5);
    };

    const timerId = setInterval(flowPage, 3000);
    return () => clearInterval(timerId);
  }, [currentIndex]);

  return (
    <div className="mt-20" style={{ position: "relative", height: "calc(100vh - 80px)", overflow: "hidden" }}>
      <LandingSection index={0} currentIndex={currentIndex} Component={Landing_Main} />
      <LandingSection index={1} currentIndex={currentIndex} Component={Landing_Graphic} />
      <LandingSection index={2} currentIndex={currentIndex} Component={Landing_Web} />
      <LandingSection index={3} currentIndex={currentIndex} Component={Landing_Video} />
      <LandingSection index={4} currentIndex={currentIndex} Component={Landing_Voxel} />
    </div >
  );
};

export default Landing;
