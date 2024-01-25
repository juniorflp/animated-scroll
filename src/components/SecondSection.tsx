"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import ReactIcon from "../../public/assets/icons/ReactIcon";
import JsIcon from "../../public/assets/icons/JsIcon";
import Cssincom from "../../public/assets/icons/CssIcon";
import GithubIcon from "../../public/assets/icons/GithubIcon";
import meImage from "../../public/assets/images/me-poligon-2.png";
import Reveal from "./Reveal";

const SecondSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const spring = useSpring(rotate, {
    damping: 10,
    stiffness: 200,
  });

  return (
    <div
      className=" mt-60 mb-40  gap-10  flex w-full justify-around items-center text-center px-[100px] max-w-[1920px] self-center"
      ref={ref}
    >
      <motion.div className=" min-w-[400px] w-[500px] relative min-h-[400px] h-[500px] border-4 border-white border-opacity-30 rounded-full flex items-center justify-center ">
        <div className=" w-[400px] z-10 absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={meImage}
            alt="gallery img"
            placeholder="blur"
            quality={100}
            className="w-full object-cover rotate-1"
          />
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ rotate: spring }}
        >
          <div className="absolute -top-[50px]">
            <Cssincom />
          </div>
          <div className="absolute -left-[50px]">
            <ReactIcon />
          </div>
          <div className="absolute -bottom-[50px] rotate-180">
            <JsIcon />
          </div>
          <div className="absolute -right-[50px]">
            <GithubIcon />
          </div>
        </motion.div>
      </motion.div>
      <div className=" flex flex-col items-start gap-1 text-start">
        <Reveal>
          <p className="text-3xl font-semibold">Olá, me chamo </p>
        </Reveal>
        <Reveal>
          <h2 className="text-8xl font-semibold">Eduardo Jr.</h2>
        </Reveal>
        <Reveal>
          {" "}
          <p className="text-3xl font-semibold">
            Sou <span className="text-gradient2">desenvolvedor Front-end</span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="w-[440px] mt-2">
            Criei esta página para estudo com foco em animação, 3D e efeitos de
            scroll, utilizando{" "}
            <a
              href="https://nextjs.org/blog/next-13"
              target="_blank"
              className="link"
            >
              Next JS,
            </a>{" "}
            <a
              href="https://www.framer.com/motion/introduction/"
              target="_blank"
              className="link"
            >
              Framer motion
            </a>{" "}
            e{" "}
            <a
              href="https://lenis.studiofreight.com//"
              target="_blank"
              className="link"
            >
              Scroll smooth
            </a>
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default SecondSection;
