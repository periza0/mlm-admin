import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";

export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <section className="relative min-h-screen px-4 md:px-6 pt-32 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-6 md:p-10 shadow-xl">

          <h1 className="mb-8 text-center text-3xl md:text-5xl font-bold text-[#0b3046]">
            Gallery
          </h1>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="rounded-[24px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-[300px] md:h-[600px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
      <footer className="py-8 text-center text-slate-500"> © 2026 MLM Sports Club. All Rights Reserved. </footer>
    </section>
  );
}