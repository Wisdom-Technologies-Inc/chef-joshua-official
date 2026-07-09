import Image from "next/image";
import {
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";

const highlights = [
  "Signature Fine Dining Dishes",
  "Elegant Plating Presentations",
  "Pastry & Dessert Creations",
  "BBQ & Grilled Specialties",
  "International Cuisine",
];

export default function Journey() {
  return (
    <section id="journey" className="bg-black py-28">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C8A04D]">
              Culinary Journey
            </p>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              Experience Chef Joshua's Culinary Creations
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              Explore a collection of signature dishes, elegant plating,
              pastries, BBQ specialties and international cuisine by
              following Chef Joshua on Instagram.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="
                    bg-[#111]
                    border
                    border-[#C8A04D]/10
                    rounded-xl
                    px-5
                    py-4
                    text-gray-300
                  "
                >
                  • {item}
                </div>

              ))}

            </div>

            <a
              href="https://www.instagram.com/diningwith_chef_joshua/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-[#C8A04D] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >

              <FaInstagram />

              Follow on Instagram

              <FaArrowRight />

            </a>

          </div>

          {/* Right */}

          <div>

            <div
              className="
                relative
                h-[550px]
                rounded-[40px]
                overflow-hidden
                border
                border-[#C8A04D]/30
                shadow-2xl
              "
            >

              <Image
                src="/images/mission.png"
                alt="Chef Joshua"
                fill
                className="object-cover object-top hover:scale-105 transition duration-700"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}