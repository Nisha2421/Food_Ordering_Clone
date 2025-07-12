import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 footer">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----------- Left Section -----------*/}

        <div>
            <img className="mb-5 w-40" src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 leading-6">Lorem ipsum is simply dummy text of the printing and typesetting industry. Loren lpsum has been the industry's standard dummy text ever science the 1500s, whrn an unknown printer took a gallary of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons flex">
                     <img className="hover:scale-105 transition duration-500 cursor-pointer" src={assets.facebook_icon} alt="" />
                     <img className="hover:scale-105 transition duration-500 cursor-pointer" src={assets.twitter_icon} alt="" />
                    <img className="hover:scale-105 transition duration-500 cursor-pointer" src={assets.linkedin_icon} alt="" />
                </div>
        </div>

        {/* ----------- Center Section -----------*/}

        <div>
            <p className="text-xl font-medium mb-5">Company</p>
            <ul className="flex flex-col gap-2 ">
                <li>Home</li>
                 <li>About us</li>
                 <li>Delivery</li>
                 <li>Privacy Policy</li>
            </ul>
        </div>

        {/* ----------- Right Section -----------*/}

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 ">
                <li>+1-212-456-7890</li>
                 <li>nishashaw@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* ------------ Copyright Text ---------------*/}
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025 © QuickBite.com - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
