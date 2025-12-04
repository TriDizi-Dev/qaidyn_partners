import React from "react";
import "./Aboutus.css";
import girlImage from "../../assets/AboutUs/AboutUs1.png";
import rectngleBox from "../../assets/AboutUs/AboutUs2.png";
import Navbar from "../../components/Navbar/Navbar";

const AboutPage = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="cloud-wrapper">
        <div className="cloud-left">
          <h1 className="cloud-title">Fully Managed Cloud & Server Services</h1>
          <p className="cloud-desc">
            Lorem ipsum content is the dummy text which appears for the website
            site formation purpose. Lorem ipsum content is the dummy text which.
            Lorem ipsum content is the dummy text which appears for the website
            site formation purpose. Lorem ipsum content is the dummy text which.
          </p>
        </div>

        {/* <div className="cloud-right">
          <img src={girlImage} alt="Working Girl" className="cloud-image" />
        </div> */}
        <div className="cloud-right">
          <img src={rectngleBox} alt="Background Box" className="bg-box" />
          <img src={girlImage} alt="Working Girl" className="cloud-image" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
