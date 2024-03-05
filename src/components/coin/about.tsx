import React from "react";
import tradingImage1 from "@/assets/images/tradingImage1.jpeg";
import tradingImage2 from "@/assets/images/tradingImage2.jpeg";
import Image from "next/image";
import ArrowRight from "@/assets/Arrow - Right.svg";

const About = () => {
  return (
    <div className="container mt-5">
      <p className="text-[24px] font-semibold">About Bitcoin</p>

      <div>
        <div className="flex flex-col gap-2 borderBottom py-4">
          <p className="text-[20px] font-semibold">What is Bitcoin?</p>
          <p className="a">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hourse. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% form
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="flex flex-col gap-2 borderBottom py-4">
          <p className="text-[20px] font-semibold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sunt obcaecati magnam similique iste incidunt, quod
            expedita distinctio, ipsum neque error, sequi temporibus sint unde.
            Mollitia ab molestias impedit vitae itaque expedita corrupti aliquam
            reprehenderit. Veritatis modi quaerat natus? Ea, eveniet totam.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            facilis pariatur deserunt, voluptatibus, et blanditiis commodi
            consequatur omnis nesciunt non tempore quisquam corrupti vero
            similique illo, sunt harum id? Doloribus et quasi molestiae nobis
            libero magnam suscipit qui vero deleniti distinctio. Velit labore
            repellendus minima, dolorem illum quis quisquam quia saepe omnis eos
            repellat, necessitatibus delectus. Molestias mollitia ab sit?
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sunt obcaecati magnam similique iste incidunt, quod
            expedita distinctio, ipsum neque error, sequi temporibus sint unde.
            Mollitia ab molestias impedit vitae itaque expedita corrupti aliquam
            reprehenderit. Veritatis modi quaerat natus? Ea, eveniet totam.
          </p>
        </div>

        <div className="flex flex-col gap-3 borderBottom py-4">
          <p className="text-[20px] font-semibold">Already Holding Bitcoin?</p>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-1 gap-6 p-3 bg-gradient-primary rounded-lg">
              <Image
                src={tradingImage1}
                alt="trading image"
                className="rounded-lg w-[110px] h-[110px] object-cover"
              />

              <div className="flex flex-col py-1 justify-between items-start ">
                <p className="text-white font-semibold text-[20px] w-[70%] leading-7">
                  Calculate your Profits?
                </p>
                <button className="flex py-1 px-4 bg-white rounded-lg items-center gap-2">
                  <p className="text-[14px] font-medium"> Check Now </p>
                  <Image src={ArrowRight} width={14} />
                </button>
              </div>
            </div>

            <div className="flex flex-1 gap-6 p-3 bg-gradient-secondry rounded-lg">
              <Image
                src={tradingImage1}
                alt="trading image"
                className="rounded-lg w-[110px] h-[110px] object-cover"
              />

              <div className="flex flex-col py-1 justify-between items-start ">
                <p className="text-white font-semibold text-[20px] w-[80%] leading-7">
                  Calculate your tax liability
                </p>
                <button className="flex py-1 px-4 bg-white rounded-lg items-center gap-2">
                  <p className="text-[14px] font-medium"> Check Now </p>
                  <Image src={ArrowRight} width={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          esse culpa officiis facilis ducimus illum quas. Dignissimos tempora
          enim nisi, unde exercitationem explicabo aspernatur libero perferendis
          sunt, eligendi vero repudiandae? Saepe, quo reprehenderit. Fuga
          sapiente incidunt excepturi ab magnam sit.
        </p>
      </div>
    </div>
  );
};

export default About;
