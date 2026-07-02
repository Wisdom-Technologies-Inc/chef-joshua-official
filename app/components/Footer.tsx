import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#C8A04D]/20">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Dining With
              <span className="text-[#C8A04D]">
                {" "}Chef Joshua
              </span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Luxury Culinary Experiences crafted with passion,
              creativity, and exceptional hospitality.
            </p>

          </div>

          <div className="flex gap-5">

            <a
              href="https://www.instagram.com/diningwith_chef_joshua/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#C8A04D] hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/250782416970"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center hover:bg-[#C8A04D] hover:text-black transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="border-t border-[#C8A04D]/10 mt-10 pt-6 text-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Dining With Chef Joshua.
            All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Crafted with passion, creativity, and excellence.
          </p>

        </div>

      </div>

    </footer>
  );
}