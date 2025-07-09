import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 mx-auto md:w-3/4 drop-shadow-2xl drop-shadow-primary">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Build Beautiful Websites That Convert
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl max-w-xl text-gray-200"
      >
        SkyGrid Studio helps startups and small businesses create modern,
        responsive, and high-converting websites.
      </motion.p>
      <a href="#contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-primary text-white px-6 py-3 w-40 rounded-full font-semibold shadow hover:bg-purple-950 transition cursor-pointer"
        >
          Hire Us
        </motion.button>
      </a>
    </section>
  );
};

export default Hero;
