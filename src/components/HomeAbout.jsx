import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: 0,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const HomeAbout = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <motion.div className="wrapper-aboutme">
        <motion.div className="home-aboutme" ref={ref}></motion.div>
        <motion.div
          className="aboutme-content"
          variants={variants}
          initial="initial"
          animate={isInView && "animate"}
        >
          <motion.h1>About Coach Mike Cater</motion.h1>
          <motion.p>
            Welcome to the world of snowboarding excellence, where passion meets
            expertise! I'm Mike Cater, your dedicated snowboard coach, committed
            to bringing the thrill of the mountains straight to you.
          </motion.p>
          <motion.p>
            With over a decade of experience in the snowboarding scene, I've had
            the privilege of guiding enthusiasts of all ages through the joy of
            carving fresh powder and mastering the slopes. My journey began on
            the rugged mountainsides, and now, I'm thrilled to share my
            knowledge and passion with you.
          </motion.p>
          <motion.p>
            As a certified snowboard instructor, I focus on providing
            personalized coaching sessions tailored to your skill level,
            ensuring an enjoyable and progressive learning experience. Whether
            you're a novice eager to make your first turns or an advanced rider
            looking to refine your technique, I'm here to help you reach new
            heights on the snow.
          </motion.p>
          <motion.p>
            Join me in the pursuit of adrenaline, fun, and mastery. Let's carve
            unforgettable memories together, one slope at a time!
          </motion.p>
          <button className="btn-primary btn-center">Book a Classes</button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeAbout;
