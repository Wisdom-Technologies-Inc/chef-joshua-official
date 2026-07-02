import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0d0d0d]"
    >
      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/images/hero-dish.jpg.png"
          alt="Luxury Dining"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">

          <p className="uppercase tracking-[5px] text-[#C8A04D] text-sm mb-5">
            Luxury Culinary Experiences
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Dining With
            <br />
            Chef Joshua
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-2xl">
            Dedicated to creating memorable dining experiences through
            exceptional cuisine, refined techniques, and premium ingredients.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#services"
              className="bg-[#C8A04D] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="border border-[#C8A04D] text-[#C8A04D] px-8 py-4 rounded-full hover:bg-[#C8A04D] hover:text-black transition duration-300"
            >
              Book Experience
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
    </section>
  );
}