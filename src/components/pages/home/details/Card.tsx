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
    <div className="flex flex-col justify-between border p-4 m-4 text-center bg-white w-1/2 mx-auto lg:max-w-1/4 lg:mx-8">
      <div className="flex flex-col  text-left">
        <h3 className="text-xl font-bold mb-2 text-[#760069]">{title}</h3>
        <img src={image} alt={title} className="w-full h-auto mb-4" />
        <p className="mb-4 text-sm xl:text-md">{description}</p>
      </div>
      <div className="flex justify-center gap-4 items-end">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-purple-600 border border-purple-600 px-2 py-1 rounded-full w-24"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;