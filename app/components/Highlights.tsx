import {
  FaUtensils,
  FaUserTie,
  FaBirthdayCake,
  FaAward,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaUserTie size={30} />,
    title: "Executive Chef",
    text: "Luxury Culinary Leadership",
  },
  {
    icon: <FaUtensils size={30} />,
    title: "Private Dining",
    text: "Exclusive Experiences",
  },
  {
    icon: <FaBirthdayCake size={30} />,
    title: "Pastry Chef",
    text: "Elegant Desserts",
  },
  {
    icon: <FaAward size={30} />,
    title: "Fine Dining",
    text: "World-Class Service",
  },
];

export default function Highlights() {
  return (
    <section className="bg-black border-y border-[#C8A04D]/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4">

        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 px-8 py-10 border-b md:border-b-0 lg:border-r border-[#C8A04D]/10 hover:bg-[#111] transition"
          >
            <div className="text-[#C8A04D]">{item.icon}</div>

            <div>
              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400">
                {item.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}