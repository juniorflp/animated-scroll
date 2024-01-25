"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TextScale: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["20% end", "end end"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["200%", "9500%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["100%", "900%"]);
  const ml = useTransform(scrollYProgress, [0.6, 1], ["0%", "15%"]);

  return (
    <div
      className="w-full flex flex-col itens-center mt-[150px]  relative h-[300vh] mb-[0px]"
      ref={ref}
    >
      <motion.p
        style={{ scale: x2, marginRight: ml }}
        className="text-[50px] self-center "
      >
        SCROLL TO
      </motion.p>
      <motion.p
        className="text-[50px] font-extrabold h-fit sticky wide:top-[500PX] top-[400px] text-center "
        style={{ scale: x1, marginRight: ml }}
      >
        ENTER
      </motion.p>
    </div>
  );
};

export default TextScale;
