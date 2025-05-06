// components/Product/ProductGallery.jsx
import React from 'react';
import imgs from '../../assets/index'
const ProductGallery = () => {
  const thumbnails = [
    { id: 1, src: imgs.psJoy1, alt: "Gamepad thumbnail 1" },
    { id: 2, src: imgs.psJoy2, alt: "Gamepad thumbnail 2" },
    { id: 3, src: imgs.psJoy3, alt: "Gamepad thumbnail 3" },
    { id: 4, src: imgs.psJoy4, alt: "Gamepad thumbnail 4" }
  ];

  return (
    <div className="card_img_big_div">
      <div className="card_imgs">
        {thumbnails.map(thumbnail => (
          <div key={thumbnail.id} className="card_img1">
            <img src={thumbnail.src} alt={thumbnail.alt} />
          </div>
        ))}
      </div>
      <div className="card_big_img">
        <img src={imgs.psJoy5} alt="Havic HV G-92 Gamepad" />
      </div>
    </div>
  );
};

export default ProductGallery;