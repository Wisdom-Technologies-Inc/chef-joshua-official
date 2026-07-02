import Image from "next/image";

const gallery = [
  "/images/dish1.jpg",
  "/images/dish2.jpg",
  "/images/dish3.jpg",
  "/images/dish4.jpg",
  "/images/dish5.jpg",
  "/images/dish6.jpg",
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Signature Culinary Creations
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Every dish is thoughtfully crafted to combine elegance,
            creativity, and unforgettable flavor.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="relative h-[380px] rounded-3xl overflow-hidden group"
            >

              <Image
                src={image}
                alt={`Dish ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500" />

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-10 group-hover:translate-y-0 transition duration-500">

                <h3 className="text-white text-2xl font-semibold">
                  Culinary Excellence
                </h3>

                <p className="text-gray-300 mt-2">
                  Crafted with passion and precision.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}