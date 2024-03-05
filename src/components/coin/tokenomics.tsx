import React from "react";
import { PieChart } from "./charts";

const Tokenomics = () => {
  return (
    <div className="container mt-5">
      <p className="text-[24px] font-semibold">Tokenomics</p>
      <div className="mt-5">
        <p className="text-[20px] font-medium">Initial Distribution</p>
        <div className="py-2 flex items-center gap-6">
          <div className="py-2">
            <PieChart />
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className="w-[14px] h-[14px] bg-blue-500 rounded-full" />
              Crowdsale investors: 80%
            </p>
            <p className="flex items-center gap-2">
              <span className="w-[14px] h-[14px] bg-orange-400 rounded-full" />
              Foundation: 20%
            </p>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          maiores, est vitae laborum a consequatur accusantium laudantium
          cupiditate quam velit molestiae nulla ad dolores odit culpa
          voluptatibus nemo quidem mollitia laboriosam ratione ducimus.
          Laudantium, adipisci. Aliquam ex hic repellat inventore quasi,
          explicabo sit vitae, optio suscipit laborum eius error veniam!
          Doloremque non voluptatibus molestias culpa. Dolorum error maxime nisi
          amet.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;


