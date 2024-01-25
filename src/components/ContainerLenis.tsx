"use client";

import Lenis from "@studio-freight/lenis";
import React, { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ContainerLenis: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default ContainerLenis;
