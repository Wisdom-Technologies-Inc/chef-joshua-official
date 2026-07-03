"use client";

import { useState } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const titles = [
  "Founder & Executive Chef – Dining With Chef Joshua",
  "Executive Culinary Director",
  "Luxury Dining Experience Curator",
  "Private Dining & Fine Dining Specialist",
  "Executive Chef & Pastry Artisan",
  "Culinary Innovator & Gastronomy Enthusiast",
  "Kitchen Operations & Management Professional",
  "Food Safety, Hygiene & Quality Assurance Specialist",
  "Menu Development & Culinary Excellence Expert",
  "Hospitality & Guest Experience Professional",
  "International Cuisine Specialist",
  "Chef Consultant & Culinary Mentor",
  "Creative Gastronomy Professional",
  "Culinary Arts Advocate & Industry Invigilator",
  "Leader in Culinary Excellence & Hospitality",
];

export default function ProfessionalTitles() {
  const [showAll, setShowAll] = useState(false);

  const visibleTitles = showAll ? titles : titles.slice(0, 5);

  return (
    <section
      id="titles"
      className="bg-black py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Expertise & Leadership
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Excellence Built Through Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            A journey of leadership, innovation, and dedication to delivering
            exceptional culinary experiences with professionalism and passion.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {visibleTitles.map((title) => (

            <div
              key={title}
              className="flex items-start gap-4"
            >

              <FaCheckCircle
                className="text-[#C8A04D] mt-1 shrink-0"
              />

              <p className="text-gray-300 leading-7">
                {title}
              </p>

            </div>

          ))}

        </div>

        <div className="text-center mt-14">

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 border border-[#C8A04D] text-[#C8A04D] px-8 py-3 rounded-full hover:bg-[#C8A04D] hover:text-black transition duration-300"
          >
            {showAll ? "Show Less" : "View All Expertise"}

            {showAll ? <FaChevronUp /> : <FaChevronDown />}
          </button>

        </div>

      </div>
    </section>
  );
}