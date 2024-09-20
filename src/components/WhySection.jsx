import { FaMountain } from "react-icons/fa";
import { FaSnowboarding } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const Reasons = [
  {
    id: 1,
    icon: <FaMountain />,
    title: "Passionate Expertise",
    desc: "Experience the joy of snowboarding guided by a passionate expert. I bring a decade of love for the sport, ensuring every session is infused with excitement and dedication.",
  },
  {
    id: 2,
    icon: <FaSnowboarding />,
    title: "Personalized Coaching",
    desc: "Receive tailored coaching sessions designed to match your skill level and goals. From beginners to advanced riders, each lesson is crafted to enhance your abilities and boost your confidence on the slopes.",
  },
  {
    id: 3,
    icon: <FaTrophy />,
    title: "Proven Results",
    desc: "Join a community of successful riders who have achieved their snowboarding goals under my guidance. Whether it's conquering a challenging run or mastering advanced techniques, together, we'll celebrate your achievements.",
  },
];

const WhySection = () => {
  return (
    <div className="why-container">
      <div className="title">
        <h1>Why Choosing Me As Your Snowboard Coach</h1>
      </div>

      <div className="why-wrapper">
        <div className="why-content">
          {Reasons.map((item) => (
            <div key={item.id}>
              <p>{item.icon}</p>
              <p className="item-title">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySection;
