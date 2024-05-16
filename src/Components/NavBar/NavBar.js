import React, { useState } from "react";
import "./NavBar.scss";
import menuIcon from "../../assets/icons/menu-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/onehat-logo.svg";

function NavBar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="navbar">
      <img
        className="navbar__menu"
        src={menuIcon}
        alt="menu icon"
        onClick={toggleMenu}
      />
      {showMenu && (
        <article className="navbar__menu-items">
          <NavLink
            to="/"
            className="navbar__menu-item"
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/hats"
            className="navbar__menu-item"
            onClick={handleNavLinkClick}
          >
            Hats
          </NavLink>
          <NavLink
            to="/patches"
            className="navbar__menu-item"
            onClick={handleNavLinkClick}
          >
            Patches
          </NavLink>
          <NavLink
            to="/about/us"
            className="navbar__menu-item"
            onClick={handleNavLinkClick}
          >
            About Us
          </NavLink>
        </article>
      )}
      <NavLink to="/" className="navbar__logo" onClick={handleNavLinkClick}>
        <img className="navbar__logo" src={logo} alt="ONEHAT logo" />
      </NavLink>
      <div className="navbar__login-cart">
        <button onClick={()=>navigate('/login')} className="navbar__login-btn">Login</button>
        <div onClick={()=>navigate('/cart')} className="navbar__cart-cont">
          <img
            className="navbar__cart"
            src={cartIcon}
            alt="shopping cart icon"
          />
          <p className="navbar__item-count">0</p>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
