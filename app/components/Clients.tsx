import Image from "next/image";

const clients = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png",
  "/images/image8.png",
  "/images/image9.png",
  "/images/image10.png",
  "/images/image11.png",
  "/images/image12.png",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-black py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Our Happy Customers
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Trusted By Leading Hospitality Brands
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Dining With Chef Joshua has proudly collaborated with
            restaurants, lounges, hotels, and hospitality brands,
            delivering unforgettable culinary experiences.
          </p>

        </div>

        {/* Logos */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {clients.map((logo, index) => (

            <div
              key={index}
              className="
                group
                bg-[#111111]
                rounded-3xl
                p-8
                border
                border-white/5
                hover:border-[#C8A04D]
                hover:shadow-[0_0_25px_rgba(200,160,77,0.35)]
                transition-all
                duration-500
                flex
                items-center
                justify-center
                h-44
              "
            >

              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={170}
                height={100}
                className="
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}