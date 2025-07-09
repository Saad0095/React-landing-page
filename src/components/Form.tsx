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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            className="w-full md:w-1/2 flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter your Name"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Enter your Email"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                value={form.phone}
                placeholder="Enter your Phone Number"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
                onChange={handleChange}
            />
            <select
                name="serviceType"
                value={form.serviceType}
                className="p-3 rounded-md border bg-[#0C0C0C] text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all"
                onChange={handleChange}
                required
            >
                <option value="">Select Service Type</option>
                <option value="Web Development">Front-End Development</option>
                <option value="Full Stack Development">Bug Fixing</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Landing Page Development">Landing Page Development</option>
                <option value="Full Stack Development">Full Stack Website Development</option>
                <option value="E-Commerce Website Dvelopment">E-Commerce Website Dvelopment</option>
                <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <textarea
                name="message"
                value={form.message}
                placeholder="Type your message here..."
                rows={4}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color transition-all resize-none"
                onChange={handleChange}
                required
            ></textarea>
            <button
                type="submit"
                className="bg-theme-color text-white py-3 px-6 rounded-md font-semibold hover:scale-105 transition-transform w-max cursor-pointer"
            >
                Send Message
            </button>
        </motion.form>
    )
}

export default Form
