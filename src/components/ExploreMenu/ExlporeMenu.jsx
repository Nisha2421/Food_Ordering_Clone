import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExlporeMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu  flex flex-col items-center gap-4 py-16 text-gray-800" id="explore-menu">
      <h1 className=" text-3xl font-medium">Explore our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission satisfy your cravings and elevate your dining experience, One delicious meal at a time.
      </p>
      <div className="explore-menu-list flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {menu_list.map((item,index) => {
          return ( 
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
            <img className={`${category===item.menu_name?"active":""} hover:translate-y-[-10px] transition-all duration-500 cursor-pointer ` }src={item.menu_image} alt="" />
            <p> {item.menu_name} </p>
          </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExlporeMenu;
