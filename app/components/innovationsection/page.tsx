import Image from "next/image";

const cards = [
  {
    title: "Purpose",
    description:
      "Every initiative begins with understanding the people and communities it will serve.",
    image: "/images/purpose.png",
  },
  {
    title: "Collaboration",
    description:
      "Working alongside governments, institutions, experts and local communities to achieve lasting outcomes.",
    image: "/images/collabration.png",
  },
  {
    title: "Legacy",
    description:
      "Creating infrastructure and experiences that continue delivering value for decades to come.",
    image: "/images/legacy.png",
  },
];

export default function InnovationSection() {
  return (
    <section className="w-full bg-white py-6 px-6 sm:px-12 md:px-16 lg:px-24" style={{font:"Archivo"}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-14 text-gray-900">
          Leading Through Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            /* Outer Card Container (Fixed position, sharp rectangle) */
            <div
              key={index}
              className="group relative h-[500px] w-full overflow-hidden rounded-none cursor-pointer"
            >
              {/* Image (Zooms inside fixed bounds on hover) */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Default Dark Gradient at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />

              {/* Blue Overlay (#0079F3 at 60% opacity expands from bottom up) */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-0
                  group-hover:h-[180px]
                  transition-all
                  duration-700
                  ease-in-out
                  bg-[#0079F3]/60
                  z-20
                  pointer-events-none
                "
              />

              {/* Text Area (Medium font sizing) */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[180px]
                  z-30
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-6
                  pointer-events-none
                "
              >
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {card.title}
                </h3>

                <p className="text-white text-[15px] leading-relaxed max-w-[280px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}