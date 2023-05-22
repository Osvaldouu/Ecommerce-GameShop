import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";
import "swiper/swiper.min.css";
import "../Slider/slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const images = [
    "https://media.gamestop.com/i/gamestop/LEGO_Lego2kDriveNA_1760x400_Hero_D-1.webp",
    "https://media.gamestop.com/i/gamestop/NIN_SonicOriginsPlus_1760x400_Hero_D.webp",
    "https://media.gamestop.com/i/gamestop/ZeldaGIMustPlay_1760x400_Hero_D.webp",
  ];

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Imagen ${index + 1}`}  />
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
};

export default Slider;
