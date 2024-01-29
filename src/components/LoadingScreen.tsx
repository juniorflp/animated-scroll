import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [hideScreen, setHideScreen] = useState(false);
  const names = ["DESIGN", "DEVELOPMENT", "TECNOLOGY", "LOVE"];

  const changeName = setInterval(() => {
    if (index < 3) {
      setIndex(index + 1);
    }
  }, 1700);

  setTimeout(() => {
    clearInterval(changeName);
    setHideScreen(true);
  }, 6000);

  // useEffect(() => {
  //   const hero = document.querySelector(".no-scroll");

  //   if (hideScreen && hero) {
  //     console.log("a");
  //     hero.classList.add("no-scroll");
  //   } else {
  //     console.log("b");
  //     hero?.classList.remove("no-scroll");
  //   }
  //   return () => {
  //     hero?.classList.remove("no-scroll");
  //   };
  // }, [hideScreen]);

  return (
    <motion.div
      className={` bg-primary-black w-full h-screen fixed inset-0 flex flex-col items-center justify-center z-50`}
      initial={{ y: 0 }}
      animate={{ y: hideScreen ? -1000 : 0 }}
      transition={{
        duration: 1,
        ease: "backIn",
      }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-[#f1f1eb]"
        initial={{ y: 0 }}
        animate={{
          y: [0, -200, 0, -200, 0, -200, 0, -20, 0, -20, 0, -5, 0],
        }}
        transition={{
          duration: 10,
          ease: "linear",
        }}
      />
      <p className="text-[60px] font-thin ">{names[index]}</p>
    </motion.div>
  );
};

export default LoadingScreen;
