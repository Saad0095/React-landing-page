import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
  {
    name: "Ayesha R.",
    text: "Super professional! Delivered exactly what we wanted. Will definitely work again.",
    rating: 5,
  },
  {
    name: "Daniel M.",
    text: "Our website loads faster and looks amazing now! Truly impressed by the design and responsiveness.",
    rating: 5,
  },
  {
    name: "Fatima K.",
    text: "Great communication, clean code, and timely delivery. Highly recommend their work!",
    rating: 4,
  },
  {
    name: "Usman A.",
    text: "Creative, efficient, and always on time. The end product was better than we imagined.",
    rating: 4,
  },
  {
    name: "Emily D.",
    text: "Loved working with this team. They turned our vision into a stunning online presence.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 text-center px-5 md:px-20 backdrop-blur-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-white"
      >
        What Clients Say
      </motion.h2>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto p-6 bg-white/5 border border-primary text-white rounded-lg shadow hover:shadow-lg transition hover:bg-primary"
            >
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(t.rating)].map((_, index) => (
                  <FaStar key={index} size={19} />
                ))}
              </div>
              <p className="text-base italic mb-4 text-gray-200">"{t.text}"</p>
              <h3 className="font-semibold">{t.name}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
