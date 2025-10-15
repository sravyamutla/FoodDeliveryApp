import React, { useContext, useState } from 'react';
import './Navbar.css';
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";
import { Link } from "react-router-dom";
import { StoreContext } from '../context/StoreContext';
const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount} =useContext(StoreContext);
  return (
    <div className='navbar'> 
      <Link to='/'><h2>🍔 Sravya's Kitchen.</h2></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        <a href='#app-download'className={menu === "Mobile App" ? "active" : ""} onClick={() => setMenu("Mobile App")}>Mobile App</a>
        <a href='#footer'className={menu === "Contact Us" ? "active" : ""} onClick={() => setMenu("Contact Us")}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={search_icon} alt="search" />
        <div className="navbar-search-icon">
         <Link to='/cart'> <img src={basket_icon} alt="basket" /></Link>
          <div className={getTotalCartAmount() === 0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
