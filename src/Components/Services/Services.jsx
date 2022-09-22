import React from "react";
import "./Services.css";
import HertEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from "../../cv/Kavindu-Rajapaksha-CV.pdf";

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* leeft side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          dolorem harum accusantium laborum sint sapiente illo! Animi sunt a,{" "}
          <br />
          voluptatum quae fuga, nam, iure facere officiis excepturi maiores
          numquam maxime!
        </span>
        <a href={Resume} download style={{ textDecoration: "none" }}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ top: "-5rem", left: "3rem" }}>
          <Card
            emoji={HertEmoji}
            heading={"Design"}
            details={"Adobe,Photoshop,sketch"}
          />
        </div>
        <div style={{ top: "5.5rem", left: "18rem" }}>
          <Card
            emoji={Humble}
            heading={"Developer"}
            details={"Html,Css,JavaScript,Python,R"}
          />
        </div>
        <div style={{ top: "10rem", left: "1rem" }}>
          <Card
            emoji={Glasses}
            heading={"Data Engineer"}
            details={"Stastics,Mathematics,R,MatLab,MiniTab"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
