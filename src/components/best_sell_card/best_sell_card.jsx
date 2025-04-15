import React from "react";
import { FaArrowLeft, FaArrowRight, FaHeart, FaEye } from "react-icons/fa6";
import "./best_sell_card.scss";
import imgs from "../../assets/index.js";

const products = [
    {
        img: imgs.kurtka,
        title: "Breed Dry Dog Food",
        price: "$100",
        rating: "⭐⭐⭐",
        reviews: 35,
    },
    {
        img: imgs.shkaf,
        title: "CANON EOS DSLR Camera",
        price: "$360",
        rating: "⭐⭐⭐⭐",
        reviews: 95,
    },
    {
        img: imgs.culer,
        title: "ASUS FHD Gaming Laptop",
        price: "$700",
        rating: "⭐⭐⭐⭐⭐",
        reviews: 325,
    },
    {
        img: imgs.sumka,
        title: "Curology Product Set",
        price: "$500",
        rating: "⭐⭐⭐⭐",
        reviews: 145,
        discount: "-25%",
    },
];

const ProductCard = ({ img, title, price, rating, reviews, discount }) => (
    <div className="dowin_card_1">
        <div className="dowin_card11">
            <div className="_1">
                {discount && <span className="card_span">{discount}</span>}
                <div className="down_card_icons">
                    <FaHeart style={{ color: "#000000" }} />
                    <FaEye style={{ color: "#000000" }} />
                </div>
                <img src={img} alt={title} />
            </div>
            <div className="toCard"><a href="">Add To Cart</a></div>
            <div className="card_title">
                <h1 className="discount_down_card_h2">{title}</h1>
                <p className="discount_down_card_p">{price}<span></span></p>
                <p>{rating} ({reviews})</p>
            </div>
        </div>
    </div>
);

const ProductsSection = () => {
    return (
        <div className="discount_content">
            <div className="discount_up">
                <div className="discount_up_up">
                    <span className="discount_up_up_span"></span>
                    <h1 className="discount_up_up_h1">Our Products</h1>
                </div>
                <div className="discount_up_down">
                    <h1 className="discount_up_down_h1">Explore Our Products</h1>
                    <div className="discount_up_icons">
                        <FaArrowLeft className="icons_1" style={{ color: "#000000" }} />
                        <FaArrowRight className="icons_2" style={{ color: "#000000" }} />
                    </div>
                </div>
            </div>

            {/* Cardlar */}
            <div className="discount_down">
                {products.slice(0, 4).map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            <div className="discount_down products_card">
                {products.slice(4).map((product, index) => (
                    <ProductCard key={index + 4} {...product} />
                ))}
            </div>

            <button className="discount_btn">View All Products</button>
            <hr />
        </div>
    );
};

export default ProductsSection;
