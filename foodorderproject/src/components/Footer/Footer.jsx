import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h2>🍔 Sravya's Kitchen.</h2>
                <p>Order your favourite food here and enjoy a delightful dining experience at your fingertips. From sizzling starters to wholesome meals and tempting desserts, we bring flavors that satisfy every craving. Freshly prepared with care, delivered hot and fast, your perfect meal is just a click away.</p>
                <div className='footer-social-icons'>
                    <ul>
              <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
              <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
              <li><a href="#"><i className='bx bxl-instagram-alt'></i></a></li>
              <li><a href="#"><i className='bx bxl-linkedin-square'></i></a></li>
            </ul>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li> Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91879-095-6559</li>
                    <li>contact@sravya'skitchen.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            &copy; 2025 Sravya's kitchen. All right reserved.
        </p>
    </div>
  )
}

export default Footer;
