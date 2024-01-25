"use client";

import React, { Suspense, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useScroll, useSpring, useTransform } from "framer-motion";
import CardGlass from "./CardGlass";
import EarthElement from "./EarthElement";

const EarthSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end end"],
  });

  let screenWidth;
  let screenHeigth;

  if (typeof window !== "undefined") {
    screenWidth = window.innerWidth;
    screenHeigth = window.innerHeight;
  } else {
    screenWidth = 0;
    screenHeigth = 0;
  }

  const progressY = useTransform(scrollYProgress, [0, 1], [0, 0.1]);
  const progressX = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const smoothProgressY = useSpring(progressY, { damping: 20 });
  const smoothProgressX = useSpring(progressX, { damping: 20 });
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.1],
    [screenHeigth, screenWidth * 0.18 - 100]
  );
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.1],
    [screenHeigth, screenHeigth * 0.4]
  );

  const x2 = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    [screenHeigth, screenWidth * 0.17 - 100]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    [screenHeigth, screenHeigth * 0.3]
  );

  const x3 = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [screenHeigth, screenWidth * 0.16 - 100]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [screenHeigth, screenHeigth * 0.2]
  );

  const x4 = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [screenHeigth, screenWidth * 0.15 - 100]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [screenHeigth, screenHeigth * 0.1]
  );

  const dataCards = [
    {
      title: "Tridimensionalidade",
      desc: "Adotar elementos 3D em websites adiciona profundidade visual, atraindo e retendo a atenção dos usuários de maneira única.",
      x: x1,
      y: y1,
    },
    {
      title: "Interatividade Dinâmica",
      desc: "Gráficos 3D proporcionam uma experiência interativa, envolvendo os visitantes e tornando a navegação mais dinâmica e envolvente.",
      x: x2,
      y: y2,
    },
    {
      title: "Experiência Visual Aprofundada",
      desc: "A renderização 3D permite a visualização detalhada de produtos, oferecendo aos clientes uma experiência mais completa e informativa.",
      x: x3,
      y: y3,
    },
    {
      title: "Estilo Inovador",
      desc: "Incorporar elementos 3D no design do website cria uma identidade visual inovadora, destacando a marca de maneira distintiva no ambiente online.",
      x: x4,
      y: y4,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex w-full pt-28 pb-40 h-[400vh] bg-black"
    >
      <div className="flex w-full sticky top-0 h-[100vh]">
        <div className="flex w-full  relative">
          <div className="absolute inset-0 h-[100vh] w-full flex flex-col">
            <div className="flex pl-10 pt-6  z-10">
              <p className=" text-[36px] font-thin whitespace-nowrap">
                <span className="text-gradient2">4 MOTIVOS </span>PARA USAR 3D
                EM SEU WEBSITE
              </p>
            </div>
            <div className="flex">
              {dataCards.map((c, i) => (
                <CardGlass
                  key={i}
                  x={c.x}
                  y={c.y}
                  title={c.title}
                  desc={c.desc}
                />
              ))}
            </div>
          </div>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
              <EarthElement x={smoothProgressX} y={smoothProgressY} />
              <ambientLight intensity={0} />
              <directionalLight intensity={3.5} position={[3, 4.5, -3.25]} />
            </Suspense>
            <Environment preset="night" />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default EarthSection;

//EARTH COMPONENT-------------------------------------
