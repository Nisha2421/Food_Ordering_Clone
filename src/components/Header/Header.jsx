import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="w-full header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission satisfy your cravings and elevate your dining experience, One
          delicious meal at a time.{" "}
        </p>
        <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
