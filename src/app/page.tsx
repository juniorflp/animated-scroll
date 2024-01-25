import ContainerLenis from "@/components/ContainerLenis";
import CustomCursor from "@/components/CustomCursor";
import GallerySection from "@/components/GallerySection";

import Hero from "@/components/Hero";
import SecondSection from "@/components/SecondSection";
import TextScale from "@/components/TextScale";
import TextSticky from "@/components/TextSticky";
import WhiteSceen from "@/components/WhiteSceen";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <ContainerLenis>
        <CustomCursor />
        <Hero />
        <div className="flex flex-col w-full relative ">
          <div className="absolute overflow-hidden z-10 top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2E253A] to-transparent"></div>
          <SecondSection />
          <TextScale />
          <WhiteSceen />
          <GallerySection />
          <TextSticky />
        </div>
        <Footer />
      </ContainerLenis>
    </main>
  );
}
