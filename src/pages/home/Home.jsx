import React from "react";
import DigiImage from '../../assets/images/DigiTech-3.jpg';
import "./home.css";
import ProductHomeSection from "../../components/product/ProductHomeSection";



export default function Home() {
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#F6EFDF'}}>
        <img src={DigiImage} className="logo react" alt="React logo" style={{ width: '100px', height: '100px' }} />
        </div>
            <section className="hero-bg">
                <div className="hero-text">
                    <h1>BUY THE BEST COMPUTERS</h1>
                    <h2>Shop laptops at a low price</h2>
                </div>
            </section>

            <div class="product-home-section">
            <ProductHomeSection/> 
            </div>


        </>
    );
}
