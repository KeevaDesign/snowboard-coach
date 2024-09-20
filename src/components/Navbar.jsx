import { Link, NavLink } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme";
import useLocalStorage from "use-local-storage";
import LogoBlack from "../images/logo-black.svg";
import LogoWhite from "../images/logo-white.svg";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <>
      <nav>
        <div className="container nav-container">
          <Link to="/" className="nav-logo">
            <img src={theme === "light" ? LogoBlack : LogoWhite} alt="" />
          </Link>
          <ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className="booking-btn"
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                Book a Class
              </NavLink>
            </li>
          </ul>
          <div className="nav-control">
            <button className="theme-toggle">
              <ToggleTheme theme={theme} setTheme={setTheme} />
            </button>
            <button
              className="nav-toggle-btn"
              onClick={() => setIsNavShowing(!isNavShowing)}
            >
              {isNavShowing ? <IoMdClose /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
