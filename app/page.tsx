import InnovationSection from "./components/innovationsection/page";
// import InteractiveMap from '/components/innovationsection/InteractiveMap';
import Careers from "./components/Carrers/page";

import React from "react";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Hero from "./components/Hero/page";
import ProductShowcase from "./components/PrdouctShowCase/page";
import Brand from "./components/brand/page";
export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <Header />
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
      <Footer />
    </main>
  );
}