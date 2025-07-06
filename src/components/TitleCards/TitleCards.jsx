import React from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TitleCards = ({ title, category }) => {
  return (
    <div className="titlecards">
      <h2> {title ? title : "Popular on Netflix"} </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {cards_data.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TitleCards;
