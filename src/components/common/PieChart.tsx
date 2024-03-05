import React from "react";

const PieChart = () => {
  return (
    <div className="w-[200px] h-[200px]">
      <div
        className="rounded-full relative flex items-center justify-center w-full h-full bg-[orange]"
        style={{
          backgroundImage: "conic-gradient(#0088ff 0% 70%,orange 30% 100%)",
        }}
      >
        <div className=" bg-white w-[70%] h-[67%] rounded-full " />
      </div>
    </div>
  );
};

export default PieChart;
