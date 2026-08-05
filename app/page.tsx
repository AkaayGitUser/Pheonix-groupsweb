import InnovationSection from "./components/innovationsection/page";
// import InteractiveMap from '/components/innovationsection/InteractiveMap';
import InteractiveMap from "./components/InteractiveMap";

import React from "react";
import footer from "./layout/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d3b7a] flex flex-col justify-between">
      
    <section >
      <InnovationSection />
      </section>
      <section className="w-full">
        <InteractiveMap />
      </section>

      {/* <section>
        
          
          <footer />
        
      </section> */}
    </main>
  );
}