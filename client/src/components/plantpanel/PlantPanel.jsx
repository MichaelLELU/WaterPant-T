/* eslint-disable import/no-unresolved */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import PlantCard from "../plantcard/PlantCard";
import "swiper/css";
import "swiper/css/pagination";

export default function PlantPanel() {
  const { user } = useOutletContext();
  const [result, setResult] = useState();

  useEffect(() => {
    const apiURL = import.meta.env.VITE_API_URL;
    const fetchPlant = async () => {
      const response = await fetch(`${apiURL}/api/plant/${user?.userid}`);
      const data = await response.json();
      setResult(data);
    };
    fetchPlant();
  }, [user?.userid]);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        "--swiper-navigation-color": "rgb(255,250,250)",
        "--swiper-pagination-color": "rgb(255,250,250)",
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="newinSwiper"
      id="newinSwiper"
    >
      {result?.map((plant) => (
        <SwiperSlide key={plant.id}>
          <PlantCard plant={plant} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
