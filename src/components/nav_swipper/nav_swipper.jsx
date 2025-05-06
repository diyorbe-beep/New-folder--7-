import React from 'react';
import imgs from '../../assets/index';
import { FaArrowRightLong } from "react-icons/fa6";
const NavSwipper = () => {
    
    
    return (
        <div>
            <div className="things_right">
                <div className="things_right_left">
                    <img src={imgs.iphoneIcon} className="things_right_img" alt="" />
                    <h1 className="things_right_h1">Up to 10% off Voucher</h1>
                    <a className="things_right_a" href="">Shop Now</a>
                </div>
                <div className="things_right_right">
                    <img src={imgs.iphone} className="things_right_img2" alt="" />
                </div>
            </div>
        </div>
    );
}

export default NavSwipper;
