import React from "react";
import KeyEvent1 from "@/assets/images/keyEvent.png";
import Image from "next/image";

const KeyEvent = () => {
    const colors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9'];
  return (
    <div style={{backgroundColor: colors[Math.floor(Math.random() * 4)]}} className="p-[10px] ml-2 rounded-md md:p-[20px] flex flex-shrink-0 w-[300px] sm:w-[400px] md:w-[500px]">
      <div className="w-[25px] h-[25px]  sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full overflow-hidden">
        <Image alt={''} src={KeyEvent1} className="w-full h-full  object-cover" />
      </div>

      <div className="flex flex-col gap-2 pl-2 flex-1">
        <p className="font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          rerum accusamus velit quas quos
        </p>
        <p className="text-[#0000008c] text-[10px] sm:text-[12px] md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nihil
          consequuntur et tempore, hic, nostrum iste sit obcaecati, aspernatur
          commodi saepe cum nobis minus aliquam itaque quod optio aspernatur
          commodi saepe cum
        </p>
      </div>
    </div>
  );
};

export default KeyEvent;