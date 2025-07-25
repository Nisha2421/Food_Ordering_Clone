import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../context/OrderContext";

const Navbar = () => {
  const {setShowLogin} = useOrderContext()
    const [menu,setMenu] = useState ("home")
    const {getTotalCartAmount} = useOrderContext()
  return (
    <div className="navbar sticky top-0 z-1 bg-white ">
      <Link to = '/'>
      <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={`${menu==="home"?"active":"translate duration-500 hover:scale-105"}`}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":"translate duration-500 hover:scale-105"}`}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={`${menu==="mobile-app"?"active":"translate duration-500 hover:scale-105"} `}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={`${menu==="contact-us"?"active":"translate duration-500 hover:scale-105"} `}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to = '/cart'>
         <img src={assets.basket_icon} alt="" />
         </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={(e)=>{e.preventDefault();e.stopPropagation();setShowLogin(true)}}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
