import { FaCode, FaWordpress, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Custom Website Design",
    description:
      "We craft beautiful, user-friendly designs tailored to your brand identity. From wireframes to final UI/UX — we ensure every element speaks your brand language.",
    icon: <FaPaintBrush size={32} />,
  },
  {
    title: "React Development",
    description:
      "We build high-performance, scalable, and responsive web apps using modern React.js practices. Perfect for startups and fast-moving businesses.",
    icon: <FaCode size={32} />,
  },
  {
    title: "WordPress Sites",
    description:
      "Fully customizable WordPress websites using Elementor and Astra. SEO-optimized, mobile-ready, and easy for you to manage without code.",
    icon: <FaWordpress size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center ">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow hover:shadow-lg transition border border-primary bg-white/5 backdrop-blur-md hover:bg-primary"
          >
            <div className="mb-4 flex justify-center items-center ">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
