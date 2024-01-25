import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TextScroll: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 32]);

  return (
    <div
      className="mt-40 flex flex-col whitespace-nowrap gap-10 h-fit "
      ref={ref}
    >
      <motion.p
        style={{ x: x1, y }}
        className="ml-20 text-[140px] font-thin leading-none mt-10"
      >
        Development - Design - UX - Development - Design - UX
      </motion.p>
      <motion.p
        style={{ x: x2, y }}
        className="-ml-[900px] text-[140px] font-thin leading-none "
      >
        Design - Development - UX - Design - Development - UX
      </motion.p>
    </div>
  );
};

export default TextScroll;
