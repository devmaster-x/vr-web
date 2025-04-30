"use client";
import React from "react";
import MemberCard from "./MemberCard";
import Layout from "@/components/Layout";
import members_data from "@/lib/members";

const Members: React.FC = () => {
  const getAdvisorImagePath = (id: number) => `/assets/members/advisor/${id}.png`;
  const getMemberImagePath = (id: number) => `/assets/members/member/${id}.png`;
  return (
    <Layout>
      <div className="px-[5%] py-16 mt-16" style={{
        backgroundImage: `url(/assets/members/background_image.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div id="advisers" className="py-10">
          <h2 className="text-center text-3xl font-bold mb-8 text-white">ADVISERS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mx-auto max-w-[1200px] items-start">
            {members_data.advisers.map((adviser) => (
              <MemberCard
                key={adviser.id}
                name={adviser.name}
                image={getAdvisorImagePath(adviser.id)}
                links={adviser.links}
              />
            ))}
          </div>
        </div>
        <div id="members" className="py-10">
          <h2 className="text-center text-3xl font-bold mb-8 text-white">MEMBERS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mx-auto max-w-[1200px] items-start">
            {members_data.members.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                image={getMemberImagePath(member.id)}
                links={member.links}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
