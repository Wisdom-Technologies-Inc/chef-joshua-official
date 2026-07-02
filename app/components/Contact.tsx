import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Create Your Next Dining Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Ready to experience exceptional cuisine? Contact Chef Joshua
            today and let's create something unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Phone */}

          <div className="bg-[#111] rounded-3xl p-8 border border-[#C8A04D]/20 text-center hover:border-[#C8A04D] transition">
            <FaPhone
              size={35}
              className="text-[#C8A04D] mx-auto mb-6"
            />

            <h3 className="text-white text-2xl font-semibold mb-3">
              Phone
            </h3>

            <a
              href="tel:+250792453028"
              className="text-gray-400 hover:text-[#C8A04D] transition"
            >
              +250 792 453 028
            </a>
          </div>

          {/* WhatsApp */}

          <div className="bg-[#111] rounded-3xl p-8 border border-[#C8A04D]/20 text-center hover:border-[#C8A04D] transition">
            <FaWhatsapp
              size={35}
              className="text-[#C8A04D] mx-auto mb-6"
            />

            <h3 className="text-white text-2xl font-semibold mb-3">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/250782416970"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C8A04D] transition"
            >
              +250 782 416 970
            </a>
          </div>

          {/* Email */}

          <div className="bg-[#111] rounded-3xl p-8 border border-[#C8A04D]/20 text-center hover:border-[#C8A04D] transition">
            <FaEnvelope
              size={35}
              className="text-[#C8A04D] mx-auto mb-6"
            />

            <h3 className="text-white text-2xl font-semibold mb-3">
              Email
            </h3>

            <a
              href="mailto:masengeshojoshua@gmail.com"
              className="text-gray-400 hover:text-[#C8A04D] transition break-all"
            >
              masengeshojoshua@gmail.com
            </a>
          </div>

          {/* Instagram */}

          <div className="bg-[#111] rounded-3xl p-8 border border-[#C8A04D]/20 text-center hover:border-[#C8A04D] transition">
            <FaInstagram
              size={35}
              className="text-[#C8A04D] mx-auto mb-6"
            />

            <h3 className="text-white text-2xl font-semibold mb-3">
              Instagram
            </h3>

            <a
              href="https://www.instagram.com/diningwith_chef_joshua/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#C8A04D] transition break-all"
            >
              @diningwith_chef_joshua
            </a>
          </div>

        </div>

        <div className="text-center mt-16">

          <a
            href="https://wa.me/250782416970"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8A04D] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Book Your Experience
          </a>

        </div>

      </div>
    </section>
  );
}