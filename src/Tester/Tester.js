import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import categoryImg1 from './TesterImages/categoryImg1.png';
import categoryImg2 from './TesterImages/categoryImg2.png';
import categoryImg3 from './TesterImages/categoryImg3.png';

export default function Testing() {
    const [hovered, setHovered] = useState(null);

    const styles = {
        container: {
            width: "90%",
            margin: "0 auto",
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "30px 0",
        },
        title: {
            fontSize: "28px",
            fontWeight: "normal",
            color: "#003E52",
        },
        explore: {
            fontSize: "20px",
            color: "#003E52",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontWeight: "normal",
            gap: "10px",
        },
        productContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
        },
        productCard: {
            textAlign: "center",
        },
        productImage: {
            width: "100%",
            height: "auto",
            borderRadius: "10px",
        },
        productTitle: {
            textAlign: "left",
            margin: "20px 0",
            fontSize: "20px",
            fontWeight: "500",
            color: "#003E52",
        },
        iconsgroup: {
            display: "flex",
            gap: "10px",
            fontSize: "20px",
            alignItems: "center",
        },
        icon: {
            cursor: "pointer",
            color: "#003E52",
            transition: "0.3s",
            fontSize: "20px",
           
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h4 style={styles.title}>Our Product Categories</h4>
                <h5 style={styles.explore}>
                    Explore All Products
                    <div style={styles.iconsgroup}>
                        <AiOutlineLeft
                            style={{ ...styles.icon, opacity: hovered === "left" ? "1" : "0.5" }}
                            onMouseEnter={() => setHovered("left")}
                            onMouseLeave={() => setHovered(null)}
                        />
                        <AiOutlineRight
                            style={{ ...styles.icon, opacity: hovered === "right" ? "1" : "0.5" }}
                            onMouseEnter={() => setHovered("right")}
                            onMouseLeave={() => setHovered(null)}
                        />
                    </div>
                </h5>
            </div>
            <div style={styles.productContainer}>
                {/* Bench */}
                <div style={styles.productCard}>
                    <img src={categoryImg1} alt="Bench" style={styles.productImage} />
                    <p style={styles.productTitle}>Benches</p>
                </div>
                {/* Table */}
                <div style={styles.productCard}>
                    <img src={categoryImg2} alt="Table" style={styles.productImage} />
                    <p style={styles.productTitle}>Tables</p>
                </div>
                {/* Receptacle */}
                <div style={styles.productCard}>
                    <img src={categoryImg3} alt="Receptacle" style={styles.productImage} />
                    <p style={styles.productTitle}>Receptacles</p>
                </div>
            </div>
        </div>
    );
}
