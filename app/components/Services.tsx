import {
  FaUtensils,
  FaChampagneGlasses,
  FaClipboard,
  FaUsers,
  FaKitchenSet,
  FaUserGraduate,
  FaBellConcierge,
  FaCakeCandles,
} from "react-icons/fa6";

const services = [
  {
    icon: <FaUtensils size={28} />,
    title: "Private Dining",
  },
  {
    icon: <FaChampagneGlasses size={28} />,
    title: "Fine Dining",
  },
  {
    icon: <FaBellConcierge size={28} />,
    title: "Catering Services",
  },
  {
    icon: <FaClipboard size={28} />,
    title: "Menu Development",
  },
  {
    icon: <FaCakeCandles size={28} />,
    title: "Pastry & Desserts",
  },
  {
    icon: <FaKitchenSet size={28} />,
    title: "Kitchen Management",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Culinary Consulting",
  },
  {
    icon: <FaUserGraduate size={28} />,
    title: "Staff Training",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Exceptional Culinary Services
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            From intimate private dinners to luxury events,
            every experience is carefully crafted with passion,
            creativity, and exceptional hospitality.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="group bg-[#111111] rounded-3xl p-8 border border-[#C8A04D]/20 hover:border-[#C8A04D] hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-[#C8A04D] mb-6">
                {service.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <div className="w-12 h-[2px] bg-[#C8A04D] group-hover:w-24 transition-all duration-300"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}