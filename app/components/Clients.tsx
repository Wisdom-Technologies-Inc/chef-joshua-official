import Image from "next/image";

const clients = [
  "/images/client1.png",
  "/images/client2.png",
  "/images/client3.png",
  "/images/client4.png",
  "/images/client5.png",
  "/images/client6.png",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-[#0D0D0D] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#C8A04D]">
            Our Clients
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Trusted By Our Valued Clients
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Dining with Chef Joshua is proud to serve private clients,
            hospitality partners, corporate organizations,
            and special events with professionalism and excellence.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {clients.map((logo, index) => (

            <div
              key={index}
              className="bg-[#111] rounded-2xl p-6 flex items-center justify-center border border-[#C8A04D]/20 hover:border-[#C8A04D] transition"
            >

              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}