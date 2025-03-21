import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Product.module.css";
import product1 from "./ProductImages/LonaChair.png";
import product2 from "./ProductImages/CreekviewBench.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Product {
    id: number;
    name: string;
    image: string;
    collection?: string;
    isNew?: boolean;
}

const products: Product[] = [
    { id: 1, name: "Lona Chair Lounge", image: product1, isNew: true },
    { id: 2, name: "Creekview Bench", image: product2, collection: "Creekview Collection" },
];

// 🔥 **Fix Loop Issue**: Extend products dynamically if there are too few slides
const extendedProducts = [...products, ...products]; 

const FeaturedProducts: React.FC = () => {
    const swiperRef = useRef<any>(null);
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiperInstance = swiperRef.current.swiper;
                if (swiperInstance.params.navigation && typeof swiperInstance.params.navigation !== "boolean") {
                    swiperInstance.params.navigation.prevEl = prevEl;
                    swiperInstance.params.navigation.nextEl = nextEl;
                }
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
            }
        }, 100);
    }, [prevEl, nextEl]);

    return (
        <section className={styles.container}>
            <div className={styles.topsection}>
                <h2>Our Featured Products</h2>
                <div className={styles.navigationContainer}>
                    <button ref={setPrevEl} className={`${styles.icon} ${styles.arrow}`} aria-label="Previous slide">
                        <AiOutlineLeft />
                    </button>
                    <button ref={setNextEl} className={`${styles.icon} ${styles.arrow}`} aria-label="Next slide">
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay, Keyboard]}
                keyboard={{ enabled: true, onlyInViewport: true }}
                spaceBetween={20}
                breakpoints={{
                    0:{slidesPerView:1.3},
                    1024: { slidesPerView: 1.7 }
                }}
                loop={true}  
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{ prevEl, nextEl }}
                className={styles.swiper}
               
            >
                {extendedProducts.map((product, index) => (
                    <SwiperSlide key={`${product.id}-${index}`} className={styles.slide}>
                        <div className={styles.productCard}>
                            {product.isNew && <span className={styles.newBadge}>New</span>}
                            <img src={product.image} alt={product.name} className={styles.image} />
                            <div className={styles.overlay}>
                                <h4>{product.name}</h4>
                                {product.collection && (
                                    <p className={styles.collection}>
                                        <span className={styles.collectionIcon}></span> {product.collection}
                                    </p>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default FeaturedProducts;
