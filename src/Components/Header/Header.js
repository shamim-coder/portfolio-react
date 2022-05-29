import React from "react";
import "./Header.css";
import headerImage from "../../Assets/header-image.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-contain md:bg-cover">
            <div className="header-top grid grid-cols-12 container py-10">
                <div className="logo col-span-3">
                    <h2 className="text-3xl font-bold text-title-black">
                        Desig<span className="text-theme-green">ner.</span>
                    </h2>
                </div>
                <nav className="col-span-9 text-right">
                    <ul className="inline-flex gap-x-10 text-white">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <NavLink to="#service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="#portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="#pricing">Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to="#contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="grid grid-cols-2 container items-center">
                <div>
                    <h4 className="text-2xl text-theme-green font-bold mb-3">Hello I'm</h4>
                    <h1 className="text-title-black text-4xl font-extrabold mb-4">Shamim Reza</h1>
                    <h6 className="text-title-black text-1xl font-bold mb-3">Professional Freelance & Web Developer</h6>
                    <p className="w-2/3 text-gray-700 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo in inventore vel suscipit odio voluptates dicta officiis excepturi beatae?</p>
                    <button className="bg-theme text-white px-8 py-3 rounded font-semibold">Hire Me</button>
                </div>
                <div>
                    <img className="w-4/5" src={headerImage} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
