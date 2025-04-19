import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';
import imgs from '../../assets/index'

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: imgs.kurtka,
      name: 'The north coat',
      price: '$260',
      oldPrice: '$360',
      rating: '⭐⭐⭐⭐⭐ (65)'
    },
    {
      id: 2,
      image: imgs.sumka,
      name: 'Gucci duffle bag',
      price: '$960',
      oldPrice: '$1160',
      rating: '⭐⭐⭐⭐ (65)'
    },
    {
      id: 3,
      image: imgs.culer,
      name: 'RGB liquid CPU Cooler',
      price: '$160',
      oldPrice: '$170',
      rating: '⭐⭐⭐⭐ (65)'
    },
    {
      id: 4,
      image: imgs.shkaf,
      name: 'Small BookSelf',
      price: '$375',
      rating: '⭐⭐⭐⭐⭐ (65)'
    }
  ];

  return (
    <section className="daily_discount">
      <div className="container">
        <div className="discount_content">
          <div className="discount_up">
            <div className="discount_up_up">
              <span className="discount_up_up_span"></span>
              <h1 className="discount_up_up_h1">This Month</h1>
            </div>
            <div className="discount_up_down">
              <h1 className="discount_up_down_h1">Best Selling Products</h1>
              <button className="discount_btn">View All</button>
            </div>
          </div>
          <div className="discount_down">
            {products.map(product => (
              <div className="dowin_card_1" key={product.id}>
                <div className="_1">
                  <div className="down_card_icons">
                    <FaHeart />
                    <FaEye />
                  </div>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="toCard">
                  Add To Cart
                </div>
                <h1 className="discount_down_card_h2">{product.name}</h1>
                <p className="discount_down_card_p">{product.price}{product.oldPrice && <span>{product.oldPrice}</span>}</p>
                <p>{product.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;