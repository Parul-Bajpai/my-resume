import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Etteplan from "../../img/Etteplan.png";
import LAndT from "../../img/L&T.png";
import Hexooid from "../../img/hexooid.png";
import Obsessory from "../../img/Obs.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: Etteplan,
      review:
        "Developed a new UI module and backend implementation for file uploads, data extraction, and storage feature for a client. Conducted requirement analysis, planning, and created low-level designs. Built a common module from scratch for API calls used across multiple projects, including authentication, data retrieval, and data submission. Actively participated in agile ceremonies and proactively addressed bugs in production and staging environments. Assisted the QA team with test case automation.",
    },
    {
      img: LAndT,
      review:
        "Engaged in addressing various regulatory requirements and providing support during User Acceptance Testing (UAT). Actively participated in UI design and analysis, working on both UI and backend development. Responsible for handling the manufacturing domain module, including development, testing, deployment, and verification. Regularly addressed sprint and production bugs.",
    },
    {
      img: Hexooid,
      review:
        "Gathered requirements for multiple websites and designed their UI. Worked on web apps, including Chit Fund. Successfully resolved production and QA-reported bugs within specified SLAs. Actively participated in all phases of the agile software development process. Some of the websites worked on include Concentrix (https://www.concentrix.com/) and Hexooid (https://www.hexooid.com/).",
    },
    {
      img: Obsessory,
      review:
        "Gathered requirements for multiple websites and designed their UI. Worked on web apps, including Chit Fund. Successfully resolved production and QA-reported bugs within specified SLAs. Actively participated in all phases of the agile software development process. Some of the websites worked on include Concentrix (https://www.concentrix.com/) and Hexooid (https://www.hexooid.com/).",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Work Experience </span>
        <span>Throughout the  </span>
        <span>years...</span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
