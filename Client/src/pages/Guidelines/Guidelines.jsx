// Guidelines.jsx
import React, { useEffect, useState } from "react";
import "./Guidelines.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";

const guidelinesData = [
  {
    id: 1,
    title: "Full Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases, and APIs using Node.js, Python, or Ruby...",
  },
  {
    id: 2,
    title: "React Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining reusable UI components...",
  },
  {
    id: 3,
    title: "Flutter Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Designing and implementing cross-platform mobile applications using Flutter. Building beautiful, natively compiled apps for mobile, web, and desktop...",
  },
  {
    id: 4,
    title: "Php Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building and maintaining backend systems using PHP and frameworks like Laravel or Symfony. Developing RESTful APIs and server-side logic...",
  },
  {
    id: 5,
    title: "Mern Stack Developer",
    level: "Mid-Level",
    channel: "Internal",
    medium: "Medium",
    description:
      "Primary Responsibility: Building full-stack applications using MongoDB, Express.js, React, and Node.js (MERN). End-to-end development from frontend to backend...",
  },
];

const Guidelines = () => {
  const [activeId, setActiveId] = useState(1); // First card active by default

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <div className="guidelines-container">
        <div className="guidelinesheading">
          <h1>Lorem ipsum dolor</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="guidelines_timeline">
          {guidelinesData.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`guidelines_timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                } ${isActive ? "active" : ""}`}
                onClick={() => handleCardClick(item.id)}
              >
                <div
                  className={`guidelines_timeline-marker ${isActive ? "active-marker" : ""}`}
                >
                  <span className="guidelines_number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="guidelines_timeline-content">
                  {isActive ? "." : ""} 
                  <h3>{item.title}</h3>
                  <div className="guidelines_tags">
                    <span className="guidelines_tag level">{item.level}</span>
                    <span className="guidelines_tag channel">
                      {item.channel}
                    </span>
                    <span className="guidelines_tag medium">{item.medium}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Guidelines;