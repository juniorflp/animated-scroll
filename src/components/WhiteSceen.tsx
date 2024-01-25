"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const WhiteSceen: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["12% 30%", "25% start"],
  });

  const x1 = useTransform(scrollYProgress, [0.5, 1], ["20%", "100%"]);

  return (
    <div className="w-full flex justify-center relative h-[170vh] " ref={ref}>
      <motion.div
        className=" bg-white  overflow-hidden"
        style={{ width: x1 }}
      ></motion.div>
    </div>
  );
};

export default WhiteSceen;
