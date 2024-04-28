import React, { useState, useEffect } from "react";
import DigiImage from '../../assets/images/DigiTech-3.jpg';
import "./home.css";
import ProductHomeSection from "../../components/product/ProductHomeSection";
import FooterSection from "../../components/home/FooterSection";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set the element to be visible after 1 second
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#F6EFDF'}}>
        <img src={DigiImage} className="logo react" alt="React logo" style={{ width: '100px', height: '100px' }} />
        </div>
            <section className="hero-bg">
                <div className={`hero-text fade-in ${isVisible ? 'show' : ''}`}>
                    <h1>BUY THE BEST COMPUTERS</h1>
                    <h2>Shop laptops at a low price</h2>
                </div>
            </section>

            <div className="product-home-section">
            <ProductHomeSection/> 
            </div>

             <div className="product-footer-section">
            <FooterSection/> 
            </div>
        </>
    );
}
