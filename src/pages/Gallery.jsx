import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



import { useState, useEffect } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/gallery"
      );

      const data = await response.json();

      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

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
          {images.map((image) => (
  <SwiperSlide key={image._id}>
    <img
      src={image.image}
      alt="Gallery"
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