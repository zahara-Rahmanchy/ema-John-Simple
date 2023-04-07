import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="header">
      <img src={logo} />
      <div className="links">
        {/* !open means setOpen to whatever the current state is in, if currently it is true then set to false
        and vice versa */}
        <div
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          className="ham-menu"
        >
          <span>
            {open ? (
              <FontAwesomeIcon icon={faXmark} style={{ color: "white" }} />
            ) : (
              <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
            )}
          </span>
        </div>
        <ul>
          <li>
            <Link to="/">Shop</Link>
            <Link to="/order">Order </Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
