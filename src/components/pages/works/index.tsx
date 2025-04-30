"use client";
import React from "react";
import WorkCard from "./WorkCard";
import Layout from "@/components/Layout";
import { works, getWorkImagePath } from "@/lib/works"; // Import data and helper

const Works: React.FC = () => {
  return (
    <Layout>
      <div className="px-[5%] py-16 mt-16" style={{
        backgroundImage: `url(/assets/members/background_image.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div id="works" className="py-10 px-4 md:px-8"> {/* Added padding */}
          {/* Updated Titles */}
          <h1 className="text-center text-4xl font-bold mb-2 text-white">GRAPHIC DESIGN</h1>
          <h2 className="text-center text-xl font-semibold mb-10 text-white">WORKS</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> {/* Responsive grid */}
            {works.map((workItem) => (
              <WorkCard
                key={workItem.id}
                category={workItem.category}
                title={workItem.title}
                description={workItem.description}
                // Assuming image name is derivable or stored directly
                // If workItem.image is the full path, just use that:
                // image={workItem.image}
                // If it's just a filename:
                image={getWorkImagePath(workItem.image.split('/').pop() || 'placeholder.png')} // Example: extract filename
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
