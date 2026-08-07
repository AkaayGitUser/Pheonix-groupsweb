import Image from "next/image";

const cards = [
  {
    title: "Purpose",
    description:
      "Every initiative begins with understanding the people and communities it will serve.",
    image: "/images/Purpose.png",
  },
  {
    title: "Collaboration",
    description:
      "Working alongside governments, institutions, experts and local communities to achieve lasting outcomes.",
    image: "/images/Collabration.png",
  },
  {
    title: "Legacy",
    description:
      "Creating infrastructure and experiences that continue delivering value for decades to come.",
    image: "/images/Legacy.png",
  },
];

export default function InnovationSection() {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-16" style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
      <div className="max-w-[1550px] mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-center mb-8 text-black tracking-tight"
          style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}
        >
          Leading Through Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            /* Outer Card Container (Fixed position, sharp rectangle) */
            <div
              key={index}
              className="group relative h-[500px] w-full overflow-hidden isolate rounded-none cursor-pointer"
              style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Blue Overlay (#0079F3 with opacity expands from bottom up on hover) */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-0
                  group-hover:h-[125px]
                  transition-all
                  duration-500
                  ease-in-out
                  bg-[#0079F3]/45
                  z-20
                  pointer-events-none
                  overflow-hidden
                "
              />

              {/* Text Area */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[125px]
                  z-30
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-5
                  pointer-events-none
                "
              >
                <h3 className="text-white text-[20px] font-semibold mb-1">
                  {card.title}
                </h3>

                <p
                  className="text-white text-[12px] font-semibold leading-snug max-w-[300px]"
                  style={{
                    textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                  }}
                >
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