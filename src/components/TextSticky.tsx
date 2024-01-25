"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const TextSticky: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="w-full  flex relative bg-white  gap-10 pb-[100px] justify-center px-[100px] h-fit  shadow-big z-10"
      ref={ref}
    >
      <div className="flex w-full max-w-[1920px] justify-between ">
        <div className="flex items-center text-primary-black text-[80px] font-extrabold sticky top-0 w-[50%] h-screen ">
          <div className="flex w-2 h-[350px] bg-gradient"></div>
          <div className="flex flex-col leading-[100%] ml-10">
            <p>PORQUE</p>
            <p>USAR</p>
            <p>SCROLL</p>
            <p>SMOOTH</p>
          </div>
        </div>

        <div className="flex flex-col text-primary-black text-[40px] w-[50%] gap-[500px] my-[55%] ">
          <div className="flex flex-col gap-4">
            <p className="text-gradient2 text-5xl font-bold">
              CRIE INTERFACE MAIS IMERSIVAS
            </p>
            <p className="text-primary-black text-2xl">
              Desbloqueie o potencial criativo e o impacto de suas experiências
              na web. Suavizar a rolagem mergulha os usuários no fluxo da
              experiência de forma tão significativa que eles esquecem que estão
              navegando em uma página da web.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gradient2 text-5xl font-bold">
              NORMALIZE TODAS AS ENTRADAS DE USUÁRIO
            </p>
            <p className="text-primary-black text-2xl">
              Proporcione a todos os seus usuários a mesma (incrível)
              experiência, estejam eles usando trackpads, rodas de mouse ou
              qualquer outro meio. Com a rolagem suave, você controla o quão
              suave, pesada ou responsiva a experiência deve ser,
              independentemente da entrada. Mágico!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gradient2 text-5xl font-bold">
              TORNE SUAS ANIMAÇÕES IMPECÁVEIS
            </p>
            <p className="text-primary-black text-2xl">
              A sincronização com a rolagem nativa não é confiável. Aquelas
              interrupções e atrasos nas animações vinculadas à rolagem são
              causados pela multitarefa, onde os navegadores modernos executam
              animações/efeitos de forma assíncrona com a rolagem. A rolagem
              suave corrige isso.
            </p>
            <p className="text-gray-500 text-sm ">
              *Todo este conteudo foi retirado do site{" "}
              <a className="link" href="https://lenis.studiofreight.com/">
                Lenis studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TextSticky;
