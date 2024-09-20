import { useState, useEffect } from "react";
import React from "react";
import Student1Image from "../images/student1.png";
import "../pages/home/home.scss";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const feedbackData = [
  {
    id: 1,
    name: "1 John Morgan",
    img: Student1Image,
    desc: "Coach Mike is incredible! His passion for snowboarding is contagious, and his personalized coaching style helped me gain confidence on the slopes. Highly recommended!",
  },
  {
    id: 2,
    name: "2 Ellie Anderson",
    img: Student1Image,
    desc: "Mike's passion for snowboarding is truly inspiring. His enthusiasm is contagious, making every lesson an exciting and enjoyable experience.",
  },
  {
    id: 3,
    name: "3 John Morgan",
    img: Student1Image,
    desc: "As a snowboard coach, Mike provides expert guidance that caters to individual skill levels. Whether you're a beginner or an advanced rider, his personalized approach ensures continuous improvement.",
  },
  {
    id: 4,
    name: "4 Ellie Anderson",
    img: Student1Image,
    desc: "Coach Mike is incredible! His passion for snowboarding is contagious, and his personalized coaching style helped me gain confidence on the slopes. Highly recommended!",
  },
  {
    id: 5,
    name: "5 John Morgan",
    img: Student1Image,
    desc: "Coach Mike is incredible! His passion for snowboarding is contagious, and his personalized coaching style helped me gain confidence on the slopes. Highly recommended!",
  },
  {
    id: 6,
    name: "6 John Morgan",
    img: Student1Image,
    desc: "Coach Mike is incredible! His passion for snowboarding is contagious, and his personalized coaching style helped me gain confidence on the slopes. Highly recommended!",
  },
  {
    id: 7,
    name: "7 Ellie Anderson",
    img: Student1Image,
    desc: "Mike's passion for snowboarding is truly inspiring. His enthusiasm is contagious, making every lesson an exciting and enjoyable experience.",
  },
  {
    id: 8,
    name: "8 John Morgan",
    img: Student1Image,
    desc: "As a snowboard coach, Mike provides expert guidance that caters to individual skill levels. Whether you're a beginner or an advanced rider, his personalized approach ensures continuous improvement.",
  },

  {
    id: 9,
    name: "9 John Morgan",
    img: Student1Image,
    desc: "As a snowboard coach, Mike provides expert guidance that caters to individual skill levels. Whether you're a beginner or an advanced rider, his personalized approach ensures continuous improvement.",
  },
];

const Feedback = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalPages = Math.ceil(feedbackData.length / itemsPerPage);

  // Set itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // Show 1 item per page on mobile
      } else {
        setItemsPerPage(3); // Show 3 items per page on larger screens
      }
    };

    // Set the itemsPerPage initially
    handleResize();

    // Update itemsPerPage when window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevTestimonialHandler = () => {
    setIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handlePageClick = (pageIndex) => {
    setIndex(pageIndex);
  };

  return (
    <>
      <div className="test-title">
        <h1>Testimonials from Students</h1>
      </div>

      <div className="container feedback-container">
        <div className="left-btn-container">
          <button className="left-btn" onClick={prevTestimonialHandler}>
            <IoIosArrowDropleftCircle />
          </button>
        </div>
        <div className="feedback-card">
          {feedbackData
            .slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
            .map((d) => (
              <div className="feedback-content" key={d.id}>
                <div className="profile-img">
                  <img src={d.img} alt="" />
                </div>
                <div>
                  <p className="feedback-name">{d.name}</p>
                  <p className="feedback-desc">{d.desc}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="right-btn-container">
          <button className="right-btn" onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
      {/* Dot Indicator */}
      <div className="dot-indicator">
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handlePageClick(i)}
          />
        ))}
      </div>
    </>
  );
};

export default Feedback;
