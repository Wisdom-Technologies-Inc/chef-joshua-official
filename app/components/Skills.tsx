const skills = [
  "Fine Dining",
  "International Cuisine",
  "Menu Engineering",
  "Food Cost Control",
  "Kitchen Management",
  "Team Leadership",
  "Inventory Management",
  "Pastry & Baking",
  "Food Safety & Hygiene",
  "Culinary Creativity",
];

export default function Skills() {
  return (
    <section className="bg-[#0d0d0d] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Professional Skills
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Excellence In Every Detail
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

          {skills.map((skill) => (

            <span
              key={skill}
              className="px-7 py-4 rounded-full bg-[#111] border border-[#C8A04D]/20 text-gray-200 hover:bg-[#C8A04D] hover:text-black transition"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </section>
  );
}