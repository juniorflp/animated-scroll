"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import LoadingScreen from "./LoadingScreen";

const Hero: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundFront = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <LoadingScreen />
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-5xl xl:text-7xl desktop:text-8xl wide:text-9xl relative z-10 text-gradient"
      >
        WELCOME
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/assets/images/background2.1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundFront,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/assets/images/background2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
