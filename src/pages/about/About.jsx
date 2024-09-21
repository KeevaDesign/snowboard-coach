import "./about.scss";
import Img1 from "../../images/g1.jpg";
import Img2 from "../../images/g2.jpg";
import Img3 from "../../images/g3.jpg";
import Img4 from "../../images/g4.jpg";
import Img5 from "../../images/g5.jpg";
import Img6 from "../../images/g6.jpg";
import Img7 from "../../images/g7.jpg";
import Img8 from "../../images/g8.jpg";
import Img9 from "../../images/g9.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header>
        <div className="header-banner-about"></div>
      </header>
      <main>
        <div className="about-me-pic"></div>
        <div className="about-me-content">
          <h1>About Coach Mike Cater</h1>
          <p>
            Welcome to the world of snowboarding excellence, where passion meets
            expertise! I'm Mike Cater, your dedicated snowboard coach, committed
            to bringing the thrill of the mountains straight to you.
          </p>
          <p>
            With over a decade of experience in the snowboarding scene, I've had
            the privilege of guiding enthusiasts of all ages through the joy of
            carving fresh powder and mastering the slopes. My journey began on
            the rugged mountainsides, and now, I'm thrilled to share my
            knowledge and passion with you.
          </p>
          <p>
            As a certified snowboard instructor, I focus on providing
            personalized coaching sessions tailored to your skill level,
            ensuring an enjoyable and progressive learning experience. Whether
            you're a novice eager to make your first turns or an advanced rider
            looking to refine your technique, I'm here to help you reach new
            heights on the snow.
          </p>
          <p>
            Join me in the pursuit of adrenaline, fun, and mastery. Let's carve
            unforgettable memories together, one slope at a time!
          </p>
          <Link to="/booking">
            <button className="btn-primary btn-center">Book a Classes</button>
          </Link>
        </div>

        <div className="about-me-content">
          <h1>Achievement</h1>
          <div className="achievement-card">
            <h2>2012</h2>
            <h3>Expansion of Coaching Programs</h3>
            <p>
              Successfully achieved the CASI Level 1 Snowboard Instructor
              certification, marking the beginning of my professional journey in
              snowboarding education.
            </p>
            <hr />
            <h3>Started Coaching Journey</h3>
            <p>
              I joined the snowboarding community as a coach, initiating a
              journey to inspire and guide aspiring riders.
            </p>
          </div>

          <div className="achievement-card">
            <h2>2013</h2>
            <h3>Earned CASI Level 2 Snowboard Instructor</h3>
            <p>
              I joined the snowboarding community as a coach, initiating a
              journey to inspire and guide aspiring riders.
            </p>
          </div>

          <div className="achievement-card">
            <h2>2014</h2>
            <h3>First Successful Student</h3>
            <p>
              Successfully achieved the CASI Level 1 Snowboard Instructor
              certification, marking the beginning of my professional journey in
              snowboarding education.Celebrated the achievement of the first
              student reaching advanced level skills under my coaching.
            </p>
            <hr />
            <h3>Earned CASI Level 3 Snowboard Instructor</h3>
            <p>
              I joined the snowboarding community as a coach, initiating a
              journey to inspire and guide aspiring riders.
            </p>
          </div>

          <div className="achievement-card">
            <h2>2018</h2>
            <h3>Expansion of Coaching Programs</h3>
            <p>
              Expanded coaching programs to cater to a diverse range of skill
              levels, offering specialized sessions for beginners and advanced
              riders.
            </p>
          </div>

          <div className="about-me-content">
            <h1>Gallery</h1>
            <div className="gallery">
              <img src={Img1} alt="Snowboard Practice" />
              <img src={Img2} alt="Snowboard Practice" />
              <img src={Img3} alt="Snowboard Practice" />
              <img src={Img4} alt="Snowboard Practice" />
              <img src={Img5} alt="Snowboard Practice" />
              <img src={Img6} alt="Snowboard Practice" />
              <img src={Img7} alt="Snowboard Practice" />
              <img src={Img8} alt="Snowboard Practice" />
              <img src={Img9} alt="Snowboard Practice" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
