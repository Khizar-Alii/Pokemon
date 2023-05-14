import React from "react";
import "./Navbar.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="navbarHeader">
        <h3 className="Navbarlogo">
          <NavLink to="/">
            <img
              src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg"
              alt="logo"
            />
          </NavLink>
        </h3>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="activeLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="activeLink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="activeLink">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" activeClassName="activeLink">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="accountLinks">
          <a href="https://www.facebook.com/programmingwithKhiZi/">
            <FacebookRoundedIcon />
          </a>
          <a href="https://www.youtube.com/channel/UC2WSbNU-tkJgPQsV7sQZnIg">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/asthetic.kidd/">
            <InstagramIcon />
          </a>
          <a href="tel:+923175983425">
            <WhatsAppIcon />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
