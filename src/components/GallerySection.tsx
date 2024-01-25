"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import img1 from "public/assets/images/gallery-1.png";
import img2 from "public/assets/images/gallery-2.png";
import img3 from "public/assets/images/gallery-3.png";
import img4 from "public/assets/images/gallery-4.png";
import img5 from "public/assets/images/gallery-5.png";
import img6 from "public/assets/images/gallery-6.png";
import img7 from "public/assets/images/gallery-7.png";
import img8 from "public/assets/images/gallery-8.png";
import Reveal from "./Reveal";

const GallerySection: React.FC = () => {
  const images = [img1, img2, img3, img4];
  const images2 = [img5, img6, img7, img8];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      className="w-full flex flex-col relative bg-white z-10 overflow-hidden pb-[100px]"
      ref={ref}
    >
      <div className="flex items-center gap-10 px-[100px] ">
        <p className="text-primary-black text-[80px] font-thin whitespace-nowrap">
          <span className="text-gradient2">GALLERY </span>SECTION
        </p>
        <div className="w-full h-[1px] bg-primary-black"></div>
      </div>
      <Reveal>
        <p className="text-primary-black text-lg  px-[100px]">
          Galeria de fotos ativada no scroll
        </p>
      </Reveal>
      <motion.div
        className="flex gap-6 justify-between w-full mt-10"
        style={{ x: x1 }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="bg-slate-400  desktop:h-[250px] wide:h-[400px]"
          >
            <Image
              src={img}
              alt="gallery img"
              placeholder="blur"
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-6 justify-between w-full mt-10"
        style={{ x: x2 }}
      >
        {images2.map((img, i) => (
          <div
            key={i}
            className="bg-slate-400  desktop:h-[250px] wide:h-[400px]"
          >
            <Image
              src={img}
              alt="gallery img"
              placeholder="blur"
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default GallerySection;
