import React from "react";

import Header from "./layout/header";
import Footer from "./layout/footer";

import Hero from "./components/Hero/page";
import ProductShowcase from "./components/PrdouctShowCase/page";
import InnovationSection from "./components/innovationsection/page";
import Careers from "./components/Carrers/page";
import Brand from "./components/brand/page";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col overflow-x-hidden">
      <Header />

      <Hero />

      <ProductShowcase />

      <section className="w-full">
        <InnovationSection />
      </section>

      <Careers />

      <Brand />

      <Footer />
    </main>
  );
}