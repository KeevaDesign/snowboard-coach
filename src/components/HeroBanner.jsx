import SnowMan from "../images/main_img.png";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../pages/home/home.scss";

const HeroBanner = () => {
  return (
    <>
      <motion.div className="hero-banner">
        <motion.img
          src={SnowMan}
          whileHover={{
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 },
          }}
        />
        <motion.h1>Alpine Edge Snowboard Coach</motion.h1>
        <motion.div className="hero-button">
          <Link to="/booking">
            <motion.button className="btn-primary">Book a Class</motion.button>
          </Link>
          <Link to="/about">
            <motion.button className="btn-primary">About Me</motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <div class="hero-features">
        <div class="hero-features-item">
          <div>
            <i class="fas fa-graduation-cap"></i> CASI Level 3 Snowboard
            Instructor
          </div>
          <div>
            <i class="fas fa-snowboarding"></i> 10+ year snowboarder
          </div>
          <div>
            <i class="fas fa-users"></i> 300+ students
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
