"use client";
import React from "react";
import TextScroll from "./TextScroll";
import Image from "next/image";
import batman from "../../public/assets/images/heros/batman.png";
import spider from "../../public/assets/images/heros/spiderman.png";
import ironman from "../../public/assets/images/heros/irnman.png";
import panter from "../../public/assets/images/heros/panter.png";
import thor from "../../public/assets/images/heros/thor.png";

const ExpandedCards: React.FC = () => {
  const heroImages = [
    { hero: batman, name: "BATMAN" },
    { hero: spider, name: "SPIDER MAN" },
    { hero: ironman, name: "IRON MAN" },
    { hero: panter, name: "BLACK PANTHER" },
    { hero: thor, name: "THOR" },
  ];
  return (
    <div className="flex flex-col w-full -mt-[250px]  bg-primary-black">
      <div className="flex  w-full ">
        <TextScroll />
      </div>
      <div className="flex h-[550px] relative bg-black  shadow-up ">
        {heroImages.map((item, i) => (
          <div className="relative group expanded-card" key={i}>
            <Image
              key={i}
              src={item.hero}
              alt="gallery img"
              placeholder="blur"
              quality={100}
              className="w-full h-full object-cover"
            />
            <div className="flex absolute bottom-[100px] right-0 -rotate-90 group-hover:rotate-0 group-hover:right-[48%] group-hover:bottom-12 opacity-50 group-hover:opacity-100 expanded-hover transition-all duration-500 z-10">
              <p className="text-xl font-semibold">{item.name}</p>
            </div>
            <div className="flex w-full bg-gradient-to-t from-black  to-transparent h-56  absolute bottom-0 right-0 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandedCards;
