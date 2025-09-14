import { Globe, ChartColumnIncreasing, Bubbles } from "lucide-react";
const services = [
  {
    title: "IT Services",
    description:
      "EnergyX IT Services provide Information Technology solution for your business needs; from IT support for the whole company, back up support for IT teams or implementing IT ideas that drive your business forward.",
    icon: <Globe className="w-12 h-12" />,
  },
  {
    title: "Tranning Center ",
    description:
      "EnergyX Training Center is a training provider in Indonesia with experience in the delivery of Information Technology training and certification.",
    icon: <ChartColumnIncreasing className="w-12 h-12" />,
  },
  {
    title: "HR Outsourcing Services",
    description:
      "EnergyX Human Resource Outsourcing Services help in reducing cost-per-hire, better deployment time and improved quality of the candidate pool. We can partner with you in Indonesia as well as globally to deliver customized solutions fitting your needs.",
    icon: <Bubbles className="w-12 h-12" />,
  },
];

export default function OurServicesSection() {
  return (
    <section id="service" className="py-30 bg-gray-50 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Our <span className="text-[#3775b2]">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="w-full h-48 flex items-center justify-center rounded-xl mb-6 bg-gray-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
