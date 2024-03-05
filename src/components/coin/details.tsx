import React from "react";
import Sentiment from "./sentiment";
import About from "./about";
import Tokenomics from "./tokenomics";
import Performance from "./performance";
import Team from "./team";

const Details = () => {
  return (
    <div>
      <div className="py-6 overflow-x-auto">
        <div className="flex items-center gap-10   borderBottom font-semibold h-[50px]">
          <p className="navDetails">Overview</p>
          <p className="navDetails">Fundamentals</p>
          <p className="navDetails">News Insights</p>
          <p className="navDetails">Sentiments</p>
          <p className="navDetails">Team</p>
          <p className="navDetails">Technicals</p>
          <p className="navDetails">Tokenomics</p>
        </div>
      </div>

      <Performance />
      <Sentiment/>
      <About/>
      <Tokenomics/>
      <Team/>

    </div>
  );
};

export default Details;
