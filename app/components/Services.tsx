import {
  FaUtensils,
  FaCakeCandles,
  FaChampagneGlasses,
  FaClipboardList,
  FaUsers,
  FaKitchenSet,
  FaUserGraduate,
  FaBellConcierge,
} from "react-icons/fa6";

const services = [
  {
    icon: FaUtensils,
    title: "Private Dining Experiences",
    description:
      "Exclusive dining experiences tailored to create unforgettable moments.",
  },
  {
    icon: FaCakeCandles,
    title: "Pastry & Desserts",
    description:
      "Elegant handcrafted pastries and desserts made with creativity and precision.",
  },
  {
    icon: FaChampagneGlasses,
    title: "Special Events & Celebrations",
    description:
      "Luxury culinary experiences for weddings, anniversaries and private events.",
  },
  {
    icon: FaClipboardList,
    title: "Menu Development",
    description:
      "Custom menus designed to match your event and culinary vision.",
  },
  {
    icon: FaBellConcierge,
    title: "Catering Services",
    description:
      "Premium catering with exceptional presentation and world-class service.",
  },
  {
    icon: FaKitchenSet,
    title: "Kitchen Management",
    description:
      "Professional kitchen operations focused on quality and efficiency.",
  },
  {
    icon: FaUsers,
    title: "Culinary Consulting",
    description:
      "Expert advice for restaurants, hospitality businesses and culinary projects.",
  },
  {
    icon: FaUserGraduate,
    title: "Staff Training & Mentorship",
    description:
      "Developing culinary professionals through leadership and practical training.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0d0d0d] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Exceptional Culinary Services
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Every experience is thoughtfully designed to deliver exceptional
            cuisine, refined hospitality, and unforgettable memories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex items-start gap-5 rounded-2xl border border-[#C8A04D]/10 bg-[#111] p-7 hover:border-[#C8A04D] transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#C8A04D]/10 group-hover:bg-[#C8A04D] transition-all duration-300">
                  <Icon className="text-2xl text-[#C8A04D] group-hover:text-black transition-all duration-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}