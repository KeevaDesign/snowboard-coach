import React, { useState } from "react";
import Img1 from "../images/g1.jpg";
import "./bookingform.scss";
import "../index.scss";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resort: "Blue Mountain",
    duration: "90 mins",
    date: "",
    time: "",
    numberOfStudents: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main>
      <h1 className="form-title" id="form">
        Book Your Classes
      </h1>
      <div className="form-wrapper">
        <div className="form-img">
          <img src={Img1} alt="" />
        </div>
        <form className="form-content" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Time</label>
            <select
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="morning">Morning Session - 09:00-12:00</option>
              <option value="afternoon">Afternoon Session 13:00-16:00</option>
              <option value="evening">Evening Session 17:00 - 20:00</option>
            </select>
          </div>

          <div>
            <label>Resorts</label>
            <select
              name="resort"
              value={formData.resort}
              onChange={handleChange}
            >
              <option value="Blue Mountain">Blue Mountain</option>
              <option value="Horseshoe Ski Resort">Horseshoe Ski Resort</option>
              <option value="Resort 3">Mount St. Louis Moonstone</option>
            </select>
          </div>

          <div>
            <label>Number of Students</label>
            <input
              type="number"
              name="numberOfStudents"
              value={formData.numberOfStudents}
              onChange={handleChange}
              min="1"
            />
          </div>

          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default BookingForm;
