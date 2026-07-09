import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[550px]  rounded-3xl overflow-hidden">

            <Image
              src="/images/image1.jpeg"
              alt="Chef Joshua"
              fill
              className="object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[4px] text-[#C8A04D] mb-3">
              About Chef Joshua
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight mb-8">
              Culinary Excellence
              <br />
              Redefined.
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Chef Joshua Masengesho is an Executive Chef,
              Pastry Chef, Culinary Innovator, and hospitality
              professional with expertise in fine dining,
              private dining, kitchen management,
              and food safety.
            </p>

            <p className="text-gray-400 leading-8 mb-10">
              Driven by a passion for excellence, Chef Joshua
              is committed to transforming every meal into
              a remarkable dining experience through
              creativity, precision, and genuine hospitality.
            </p>

            <a
              href="#services"
              className="inline-block bg-[#C8A04D] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Services
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}