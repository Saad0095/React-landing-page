import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
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
    <section className="py-16 text-center px-20 backdrop-blur-md">
      <h2 className="text-3xl font-bold mb-10 text-white">What Clients Say</h2>

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
            <div className="max-w-md mx-auto p-6 bg-white/5 border border-primary text-white rounded-lg shadow hover:shadow-lg transition hover:bg-primary">
              {/* <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={18} />
                ))}
              </div> */}
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(t.rating)].map((_, index) => (
                  <FaStar key={index} size={19} />
                ))}
              </div>
              <p className="text-base italic mb-4">"{t.text}"</p>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
