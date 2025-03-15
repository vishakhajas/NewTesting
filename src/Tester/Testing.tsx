import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import categoryImg1 from "./TesterImages/categoryImg1.png";
import categoryImg2 from "./TesterImages/categoryImg2.png";
import categoryImg3 from "./TesterImages/categoryImg3.png";
import styles from "./Testing.module.css";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    image: string;
    alt: string;
}

const productData: Product[] = [
    { id: 1, name: "Benches", image: categoryImg1, alt: "Wooden outdoor bench with metal frame" },
    { id: 2, name: "Tables", image: categoryImg2, alt: "Modern outdoor table with sturdy legs" },
    { id: 3, name: "Receptacles", image: categoryImg3, alt: "Durable outdoor waste receptacle with lid" },
    { id: 4, name: "Benches", image: categoryImg1, alt: "Wooden outdoor bench with metal frame" },
    { id: 5, name: "Tables", image: categoryImg2, alt: "Modern outdoor table with sturdy legs" },
    { id: 6, name: "Receptacles", image: categoryImg3, alt: "Durable outdoor waste receptacle with lid" }
];


const Testing: React.FC = () => {
    const swiperRef = useRef<any>(null);

    const handleMouseEnter = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.params.autoplay.delay = 1500; // Set autoplay delay
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };
    const navigate = useNavigate();

const handleNavigation = (category: string) => {
    navigate(`/${category.toLowerCase()}`);
};

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.title}>Our Product Categories</h4>
                <div className={styles.topRightContainer}>
                    <span className={styles.exploreText}>Explore All Products</span>
                    <div className={styles.navigationContainer}>
                        <button className={`${styles.icon} ${styles.arrow} custom-prev`} aria-label="Previous slide">
                            <AiOutlineLeft />
                        </button>
                        <button className={`${styles.icon} ${styles.arrow} custom-next`} aria-label="Next slide">
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={styles.swiperContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Swiper
                    ref={swiperRef}
                    breakpoints={{
                        600: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.7 }
                    }}
                    spaceBetween={20}
                    navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                    modules={[Navigation, Autoplay, Keyboard]}
                    loop={true}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    speed={1500}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                >
                    {productData.map((product) => (
                        <SwiperSlide  key={product.id} className={styles.swiperSlide} onClick={() => handleNavigation(product.name)} >
                            <div className={styles.productContent}>
                                <img src={product.image} alt={product.alt} className={styles.blurredImage} />
                                <div className={styles.clearImageWrapper}>
                                    <img src={product.image} alt={product.alt} className={styles.clearImage} />
                                </div>
                            </div>
                            <p className={styles.productText}>{product.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testing;
