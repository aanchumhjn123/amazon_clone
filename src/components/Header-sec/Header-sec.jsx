import React from "react";
import { NavLink } from "react-router-dom";
import "./header-sec.css";
import { useState } from "react";

const Header_sec = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <header className="header_sec">
      <div className="nav_wrapper_sec">
        <div className="form-inline ml-auto ">
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <i className="ri-menu-line"></i>
          </div>
        </div>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Treanding</h4>
            <div className="btn btn-primary1" onClick={ToggleSidebar}>
              <i class="ri-close-line"></i>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="items">All Items</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>

        <span className="all navbor">Amazon miniTV</span>
        <span className="all navbor">Mobile</span>
        <span className="all navbor">Gift Cards</span>
        <span className="all navbor">Buy Again</span>
        <span className="all navbor">Fashion</span>
        <span className="all navbor">Home & Kitchen</span>
        <span className="all nav_active navbor">
          <NavLink to="items"> Items</NavLink>
        </span>
        <span className="all navbor">Health, Household &personal Care</span>
        <span className="all navbor">Gift ideas</span>
      </div>
    </header>
  );
};

export default Header_sec;
