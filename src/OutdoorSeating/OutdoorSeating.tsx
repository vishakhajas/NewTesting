import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./OutdoorSeating.module.css";

const OutdoorSeating: React.FC = () => {
  return (
    <section className={styles.container}>
      <Swiper
        modules={[ Navigation ,Pagination,]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true  }}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={styles.swiper}
      > 
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={styles.contentWrapper}>
            <div className={styles.leftContent}>
              <h2>From conceptualization, to installation, to inspiration.</h2>
              <button className={styles.button}>View Our Inspiration</button>
            </div>
            <div className={styles.rightContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
                <a href="#"> Learn More</a>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 (Duplicate or different content) */}
        <SwiperSlide>
          <div className={styles.contentWrapper}>
            <h2>Second Slider</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.contentWrapper}>
            <h2>Third Slider</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.contentWrapper}>
            <h2>Fourth Slider</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.contentWrapper}>
            <h2>Fifth Slider</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OutdoorSeating;
