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
    <section
      id="journey"
      className="bg-black py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C8A04D]">
              Culinary Journey
            </p>

            <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
              Experience Chef Joshua's
              Culinary Creations
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              Explore a collection of signature dishes, elegant plating,
              pastries, BBQ specialties, and international cuisine by
              following Chef Joshua on Instagram.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="bg-[#111] border border-[#C8A04D]/10 rounded-xl px-5 py-4 text-gray-300"
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

          {/* RIGHT */}

          <div>

            <div className="bg-[#111] rounded-[40px] border border-dashed border-[#C8A04D]/40 h-[550px] flex flex-col justify-center items-center">

              <div className="w-28 h-28 rounded-full border-2 border-[#C8A04D] flex items-center justify-center">

                <FaInstagram
                  size={40}
                  className="text-[#C8A04D]"
                />

              </div>

              <h3 className="text-white text-2xl font-semibold mt-8">
                Chef Joshua's Portrait
              </h3>

              <p className="text-gray-500 mt-4 text-center max-w-sm px-8 leading-7">
                Replace this placeholder with a professional
                portrait of Chef Joshua once provided.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}