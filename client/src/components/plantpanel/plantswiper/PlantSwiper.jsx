/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import PlantCard from "./plantcard/PlantCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PlantSwiper.css";

export default function PlantSwiper({ plants }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        "--swiper-navigation-color": "#da0000",
        "--swiper-pagination-color": "#0f574e",
      }}
      navigation
      modules={[Pagination, Navigation]}
      id="swiper"
    >
      {plants?.map((p) => (
        <SwiperSlide key={p.id} id="card">
          <PlantCard plant={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

PlantSwiper.propTypes = {
  plants: PropTypes.shape.isRequired,
};
