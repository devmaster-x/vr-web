import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MemberCardProps {
  name: string;
  image: string;
  links: Record<string, string | undefined>;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, image, links }) => {
  const validLinks = Object.entries(links).filter(
    ([, url]) => url !== undefined
  ) as [string, string][];

  return (
    <div className="flex flex-col justify-center w-48 p-2">

      <div className="w-full h-64 relative mb-2 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h3 className="text-lg font-bold mb-3 text-white text-center">{name}</h3>

      <div className="grid grid-cols-2 text-center gap-2 w-full">
        {validLinks.map(([label, url]) => (
          <Link key={label} href={url} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-black border border-gray-500 rounded-full text-xs text-white hover:border-white transition-colors"
            >
              {label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MemberCard;