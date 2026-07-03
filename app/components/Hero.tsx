import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[5px] text-[#C8A04D]">
              Welcome
            </p>

            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mt-6">

              Dining With
              <br />

              <span className="text-[#C8A04D]">
                Chef Joshua
              </span>

            </h1>

            <p className="text-xl text-gray-300 mt-8">
              Luxury Culinary Experiences
            </p>

            <p className="text-gray-500 mt-6 leading-9 max-w-xl">

              Dedicated to creating memorable dining experiences,
              Chef Joshua combines creativity, refined techniques,
              and premium ingredients to deliver world-class cuisine
              and unforgettable moments.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#contact"
                className="bg-[#C8A04D] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Book Experience
              </a>

              <a
                href="#titles"
                className="border border-[#C8A04D] text-[#C8A04D] px-8 py-4 rounded-full font-semibold hover:bg-[#C8A04D] hover:text-black transition flex items-center gap-3"
              >
                View Expertise

                <FaArrowRight />
              </a>

            </div>

            <div className="flex flex-wrap gap-4 mt-14">

              <span className="border border-[#C8A04D]/20 rounded-full px-5 py-2 text-gray-300">

                Executive Chef

              </span>

              <span className="border border-[#C8A04D]/20 rounded-full px-5 py-2 text-gray-300">

                Private Dining

              </span>

              <span className="border border-[#C8A04D]/20 rounded-full px-5 py-2 text-gray-300">

                Fine Dining

              </span>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="
              relative
              h-[650px]
              rounded-[40px]
              overflow-hidden
              border
              border-[#C8A04D]/30
              bg-[#111]
            ">

              {/* Replace later */}

              <div className="absolute inset-0 flex flex-col justify-center items-center">

                <div className="
                  w-40
                  h-40
                  rounded-full
                  border-2
                  border-[#C8A04D]
                  mb-8
                "></div>

                <h3 className="text-white text-3xl font-semibold">

                  Chef Joshua

                </h3>

                <p className="text-gray-500 mt-4">

                  Professional Portrait

                </p>

              </div>

              {/* When Joshua sends photo replace with this */}

              {
              <Image
                src="/images/hero-page.png"
                alt="Chef Joshua"
                fill
                className="object-cover"
              />
              }

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}