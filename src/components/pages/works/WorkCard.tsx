// src/components/WorkCard.tsx
import React from "react";
import Image from "next/image";

interface WorkCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ category, title, description, image }) => {
  return (
    <div className="flex flex-col border border-red-600">
      <div className="w-full bg-gray-700 relative" style={{
        aspectRatio: "3/2",
      }}>
        {/* <Image src={image} alt={title} layout="fill" objectFit="cover" /> */}
      </div>

      <div className="bg-black p-4 text-white">
        <p className="text-gray-300 font-semibold text-lg mb-1">{category}</p>

        <h3 className="text-red-600 font-bold text-2xl mb-2">{title}</h3>

        <p className="text-gray-300 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;