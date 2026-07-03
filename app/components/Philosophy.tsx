export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-black py-28"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[4px] text-[#C8A04D] mb-5">
          Culinary Philosophy
        </p>

        <h2 className="text-5xl font-bold text-white mb-16">
          Every Dish Tells A Story
        </h2>

        <blockquote className="text-3xl md:text-4xl italic font-light text-white leading-relaxed">
          “We believe that exceptional cuisine is a combination of creativity,
          technique, and genuine hospitality.”
        </blockquote>

        <p className="text-gray-400 mt-10 text-lg leading-8">
          Every dish is crafted with precision and passion, bringing people
          together and creating lasting memories through unforgettable dining
          experiences.
        </p>

        <div className="mt-12">
          <span className="text-[#C8A04D] text-xl">
            — Chef Joshua
          </span>
        </div>

      </div>
    </section>
  );
}