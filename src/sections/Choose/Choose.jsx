import React from "react";
import "./Choose.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
} from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Choose = () => {
  const whyChooseUs = [
    {
      title: "Unmatched Quality",
      icon: <FaCheckCircle />,
      description: "Craftsmanship guaranteed",
    },
    {
      title: "Timely Delivery",
      icon: <FaClock />,
      description: "Projects completed on schedule",
    },
    {
      title: "Innovative Designs",
      icon: <FaDraftingCompass />,
      description: "Creative and modern solutions",
    },
    {
      title: "Focused Service",
      icon: <FaUserFriends />,
      description: "Prioritizing client satisfaction always",
    },
  ];
  return (
    <section id="why-choose-us">
      <div className="container">
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          spaceBetween={15}
          autoplay={true}
          speed={5000}
          modules={[Autoplay]}
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
        >
          {whyChooseUs.map((why, index) => (
            <SwiperSlide className="flex why__item" key={index}>
              <div className="flex__center primary icon">{why.icon}</div>
              <div className="details">
                <h4 className="title">{why.title}</h4>
                <p className="muted">{why.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Choose;
