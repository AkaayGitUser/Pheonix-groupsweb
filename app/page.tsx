import InnovationSection from "./components/innovationsection/page";
// import InteractiveMap from '/components/innovationsection/InteractiveMap';
import Careers from "./components/Carrers/page";

import React from "react";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Hero from "./components/Hero/page";
import ProductShowcase from "./components/PrdouctShowCase/page";
import Brand from "./components/brand/page";
// import PageScrollIndicator from "./components/PageScrollIndicator/page";
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#363636] flex flex-col justify-between overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      {/* <PageScrollIndicator /> */}
      <Hero />
      <ProductShowcase />
      <section >
        <InnovationSection />
      </section>
      <section className="w-full">
        {/* <InteractiveMap /> */}
      </section>
    
      <Careers />
      <Brand />
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}