import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    name: "Ayesha R.",
    text: "Super professional! Delivered exactly what we wanted.",
  },
  {
    name: "Daniel M.",
    text: "Our website loads faster and looks amazing now!",
  },
  { name: "Fatima K.", text: "Great communication and clean code!" },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-indigo-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        What Clients Say
      </h2>
      <Swiper spaceBetween={30} slidesPerView={1} loop>
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-xl mx-auto p-6 bg-white border rounded-lg shadow">
              <p className="text-lg italic text-gray-600 mb-4">"{t.text}"</p>
              <h3 className="font-semibold text-indigo-800">{t.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
