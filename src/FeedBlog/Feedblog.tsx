import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Feedblog.module.css";
import blog1 from "./FeedblogImages/blog1.png"
import blog2 from "./FeedblogImages/blog2.png"
import blog3 from "./FeedblogImages/blog3.png"
interface BlogItem {
    category: string;
    image: string;
    title: string;
    readMore: string;
    link: string;
    altText: string;
}

const blogData: BlogItem[] = [
    {
        category: "Education",
        image: blog1,
        title: "The Best Time to Invest in Outdoor Furniture",
        readMore: "Read more",
        link: "/blog1",
        altText: "Outdoor furniture set in a sunny backyard with greenery."
    },
    {
        category: "Design",
        image: blog2,
        title: "Designing Cohesive Outdoor Spaces With Coordinating Site Furnishings",
        readMore: "Read more",
        link: "/blog2",
        altText: "Modern outdoor space with matching furniture and lighting."
    },
    {
        category: "Customization",
        image: blog3,
        title: "Site Furnishings With Custom Colors - Creativity With Colors",
        readMore: "Read more",
        link: "/blog3",
        altText: "Vibrant outdoor bench and table with custom colors."
    },
];

const Feedblog: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h6>INSIGHTS</h6>
                <h2>Beyond the design,<br></br>news from our industry.</h2>
            </div>
            <div className={styles.blogList}>
                {blogData.map((item, index) => (
                    <a key={index} href={item.link} className={styles.blogCard}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                            <span className={styles.category}>{item.category}</span>
                        </div>
                        <p className={styles.title}>{item.title}</p>
                        <span className={styles.readMore} >
                            {item.readMore}
                        </span>
                    </a>
                ))}
            </div>

            {/* mobile responsive  */}
            <Swiper
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                }}
                modules={[Autoplay, Keyboard, Pagination]}
                spaceBetween={20}
                keyboard={{ enabled: true, onlyInViewport: false }}
                pagination={{ clickable: true }}
                grabCursor={true}
                loop={true}
                autoplay={false}
                className={styles.mobileCarousel}
            >
                {blogData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={item.link} className={styles.blogCard}>
                            <div className={styles.imageContainer}>
                                <img src={item.image} alt={item.title} className={styles.image} />
                                <span className={styles.category}>{item.category}</span>
                            </div>
                            <p className={styles.title}>{item.title}</p>
                            <span className={styles.readMore}>{item.readMore}</span>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Feedblog;