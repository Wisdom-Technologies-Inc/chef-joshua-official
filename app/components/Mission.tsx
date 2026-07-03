import { FaArrowRight } from "react-icons/fa6";

export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-[#0d0d0d] py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C8A04D]">
              Our Mission
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mt-5">
              Redefining
              <br />
              The Art Of Dining
            </h2>

            <div className="w-24 h-[2px] bg-[#C8A04D] mt-8 mb-10"></div>

            <p className="text-gray-300 leading-9 text-lg">
              To redefine the art of dining by delivering extraordinary
              culinary experiences distinguished by innovation,
              elegance, and uncompromising excellence.
            </p>

            <p className="text-gray-400 leading-9 text-lg mt-8">
              At
              <span className="text-white font-semibold">
                {" "}Dining With Chef Joshua
              </span>
              , we are devoted to creating bespoke moments through
              exceptional cuisine, impeccable service, and a relentless
              commitment to quality—transforming every occasion into a
              timeless and unforgettable experience.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-10 text-[#C8A04D] font-semibold hover:gap-5 transition-all"
            >
              Book Your Experience

              <FaArrowRight />
            </a>

          </div>

          {/* Right Image */}

          <div>

            <div className="
              h-[550px]
              rounded-[40px]
              border-2
              border-dashed
              border-[#C8A04D]/30
              bg-[#111]
              flex
              items-center
              justify-center
            ">

              <div className="text-center px-8">

                <div className="
                  w-28
                  h-28
                  rounded-full
                  border-2
                  border-[#C8A04D]
                  mx-auto
                  mb-8
                "></div>

                <h3 className="text-white text-3xl font-semibold">
                  Mission Image
                </h3>

                <p className="text-gray-500 mt-4 leading-8">
                  Replace this placeholder with a professional
                  image of Chef Joshua once available.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}