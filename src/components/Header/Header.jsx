import React, {useContext} from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useState} from "react";
import {AuthContext} from "../../Providers/AuthProviders";
const Header = () => {
  const [open, setOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext) || {};

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

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
              <FontAwesomeIcon icon={faXmark} style={{color: "white"}} />
            ) : (
              <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
            )}
          </span>
        </div>
        <ul>
          <li>
            <Link to="/">Shop</Link>
            <Link to="/order">Order </Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            {!user && <Link to="/signup">Sign Up</Link>}
            {user && (
              <>
                <small className="email">{user.email}</small>
                <small>
                  <button onClick={handleLogout}> Sign Out</button>
                </small>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
