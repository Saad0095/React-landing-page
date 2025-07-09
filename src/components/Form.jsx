import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 flex flex-col gap-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-white text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          placeholder="Your Name"
          className="p-3 rounded-md bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-white text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          placeholder="Your Email"
          className="p-3 rounded-md bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-white text-sm font-medium">
          Phone (optional)
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={form.phone}
          placeholder="Your Phone Number"
          className="p-3 rounded-md bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="serviceType" className="text-white text-sm font-medium">
          Service Type
        </label>
        <select
          name="serviceType"
          id="serviceType"
          value={form.serviceType}
          className="p-3 rounded-md bg-transparent border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="Frontend Development">Front-End Development</option>
          <option value="Bug Fixing">Bug Fixing</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Landing Page Development">Landing Page Development</option>
          <option value="Full Stack Development">Full Stack Website Development</option>
          <option value="E-Commerce Website Development">E-Commerce Website Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-white text-sm font-medium">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={form.message}
          placeholder="Tell us more about your project..."
          rows={4}
          className="p-3 rounded-md bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-primary text-white py-3 px-6 rounded-md font-semibold hover:scale-105 transition-transform w-max cursor-pointer"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default Form;
