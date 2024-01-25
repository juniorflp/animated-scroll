import CustomCursor from "@/components/CustomCursor";

import Hero from "@/components/Hero";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <CustomCursor />
      <Hero />
      <div className="flex flex-col w-full relative ">
        <div className="absolute overflow-hidden z-10 top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2E253A] to-transparent"></div>
      </div>
      <Footer />
    </main>
  );
}
