import InnovationSection from "./components/innovationsection/page";
// import InteractiveMap from '/components/innovationsection/InteractiveMap';

import React from "react";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Hero from "./components/Hero/page";
import ProductShowcase from "./components/PrdouctShowCase/page";
import Careers from "./components/Carrers/page";

// import PageScrollIndicator from "./components/PageScrollIndicator";
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#363636] flex flex-col justify-between overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      {/* <PageScrollIndicator /> */}
      <Hero />
 <Careers />
      {/* OUR STORY / INNOVATION / IMPACT */}
      <ProductShowcase />

     
      <InnovationSection />
      
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}