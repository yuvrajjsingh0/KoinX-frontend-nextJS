import { teamsData } from "@/dummyData/TeamData";
import React from "react";
import TeamCard from "../ui/TeamCard";

const Team = () => {
  return (
    <div className="container mt-5">
      <p className="text-[24px] font-semibold">Team</p>

      <div className="flex flex-col gap-4 pt-4 ">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          molestiae hic incidunt voluptatem ullam mollitia assumenda, sunt eius
          nam veritatis expedita voluptas fugit velit aliquid excepturi deleniti
        </p>

        <div className="flex flex-col gap-4">
          {teamsData.map((item) => (
            <TeamCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
