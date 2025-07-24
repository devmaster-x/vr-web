// src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  image: string;
  description: string;
  links: { label: string; url: string }[];
}

const Card: React.FC<CardProps> = ({ title, image, description, links }) => {
  return (
    <div className="flex flex-col justify-between border p-4 md:p-6 m-2 md:m-4 text-center bg-white w-full mx-auto lg:max-w-1/4 rounded-lg shadow-sm">
      <div className="flex flex-col text-left">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-[#760069]">{title}</h3>
        <img src={image} alt={title} className="w-full h-auto mb-4 rounded" />
        <p className="mb-4 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 items-end">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 border border-purple-600 px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm hover:bg-purple-600 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;