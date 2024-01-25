"use client";
import { MotionProps } from "framer-motion";
import React, { useRef } from "react";
import { MotionValue } from "framer-motion";
import Earth from "../../public/Earth";
interface EarthElementProps extends MotionProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}
const EarthElement = ({ x, y }: EarthElementProps) => {
  const ref = useRef<any>(null);
  return (
    // AUTO ROTATE ----------------------------------
    // useFrame((state, delta) => {
    //   ref.current.rotation.y += delta * 0.3;
    // });

    // MOUSE ROTATE ----------------------------------
    // const options = {
    //   damping: 20,
    // };
    // const mouse = {
    //   x: useSpring(useMotionValue(0), options),
    //   y: useSpring(useMotionValue(0), options),
    // };

    // const manageMouse = (e: MouseEvent) => {
    //   const { innerWidth, innerHeight } = window;
    //   const { clientX, clientY } = e;
    //   const x = -0.5 + clientX / innerWidth;
    //   const y = -0.5 + clientY / innerHeight;

    //   mouse.x.set(x);
    //   mouse.y.set(y);
    // };

    // useEffect(() => {
    //   window.addEventListener("mousemove", manageMouse);
    //   return () => window.removeEventListener("mousemove", manageMouse);
    // }, []);

    <Earth meshRef={ref} y={x} x={y} />
  );
};

export default EarthElement;
