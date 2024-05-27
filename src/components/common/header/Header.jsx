import React, { useState } from "react";
import "./header.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import { nav } from "../../data/data";


const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src="./images/logo.png" alt="Gaya walker logo" />
          <h2>Gaya walker.</h2>
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <a href={list.path} target="_blank" rel="noopener noreferrer">
                  {list.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <RiCloseCircleFill className="icon" /> : <TbGridDots className="icon" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
