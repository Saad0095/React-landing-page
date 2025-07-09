// Services.jsx
const services = [
  {
    title: "Custom Website Design",
    description: "Tailored UI/UX to match your brand.",
  },
  {
    title: "React Development",
    description: "Fast, scalable web applications with React.js",
  },
  {
    title: "WordPress Sites",
    description: "SEO-optimized, responsive websites using Elementor & Astra.",
  },
];
const Services = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition border border-indigo-100"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
