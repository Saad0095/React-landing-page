import { motion } from "framer-motion";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-4">
      <motion.h1
        className="text-4xl font-bold text-theme-color text-center "
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>
      <p className="w-full md:w-1/2 text-center text-md mx-auto text-gray-300 p-8">
        Have a project in mind? Need a new website or want to improve an
        existing one? Let’s bring your vision to life — drop us a message and
        we’ll get back to you shortly.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-auto md:w-10/12">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
