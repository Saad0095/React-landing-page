import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 mx-auto md:w-3/4 drop-shadow-2xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-white"
      >
        Build Beautiful Websites That Convert
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-lg md:text-xl max-w-xl text-gray-200"
      >
        SkyGrid Studio helps startups and small businesses create modern,
        responsive, and high-converting websites.
      </motion.p>

      <a href="#contact">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 w-40 rounded-full font-semibold shadow hover:bg-indigo-700 transition cursor-pointer"
        >
          Hire Us
        </motion.button>
      </a>
    </motion.section>
  );
};

export default Hero;
