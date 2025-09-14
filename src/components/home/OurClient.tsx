
const clients = [
  { name: "Client A", logo: "/images/client-a.png" },
  { name: "Client B", logo: "/images/client-b.png" },
  { name: "Client C", logo: "/images/client-c.png" },
  { name: "Client D", logo: "/images/client-d.png" },
  { name: "Client E", logo: "/images/client-e.png" },
  { name: "Client F", logo: "/images/client-f.png" },
  { name: "Client G", logo: "/images/client-g.png" },
  { name: "Client H", logo: "/images/client-h.png" },
];

export default function OurClientsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our  Clients  &  <span className="text-[#3775b2]"> Partners </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
