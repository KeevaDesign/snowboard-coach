import React from "react";
import FooterLogo from "../images/logo-white.png";
import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <>
      {/* section 1 */}
      <div className="footer-wrapper">
        <footer>
          <div className="col">
            <img className="footer-logo" src={FooterLogo} alt="Footer Logo" />
            <p>
              Welcome to the world of snowboarding excellence, where passion
              meets expertise! I'm Mike Cater, your dedicated snowboard coach,
              committed to bringing the thrill of the mountains straight to you.
            </p>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/classes">
                <li>Classes</li>
              </Link>
              <Link to="/booking">
                <li>Book a Class</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="follow-us">Follow Us</h3>
            <SocialLink />

            <h3 className="subscribe">Subscribe to Our Newsletter</h3>
            <form action="#" method="post" class="newsletter-form">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
              />
              <button type="submit" className="btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </footer>
      </div>
      {/* section 2 */}
      <div className="copyright">
        <small>2024 © All Rights Reserved.</small>
      </div>
    </>
  );
};

export default Footer;
