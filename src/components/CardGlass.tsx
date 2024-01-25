import React from "react";
import { MotionValue, motion } from "framer-motion";

interface CardGlassprops {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title: string;
  desc: string;
}

const CardGlass: React.FC<CardGlassprops> = ({ x, y, title, desc }) => {
  return (
    <motion.div
      className="flex flex-col gap-4 w-[270px] wide:w-[370px] h-[310px] wide:h-[410px] items-center   bg-glass  z-10 p-6"
      style={{ x, y }}
    >
      <p className="text-xl font-semibold text-gradient2">{title}</p>
      <p className=" leading-6">{desc}</p>
    </motion.div>
  );
};

export default CardGlass;
