import React from "react";
import "./Works.css";
import Fiver from "../../img/fiverr.png"
import Github from "../../img/github.png"
import Facebook from "../../img/Facebook.png"
import Upwork from "../../img/Upwork.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import {motion} from 'framer-motion'


const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Worls for All these</span>
        <span>Services</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          dolorem harum accusantium laborum sint sapiente illo! Animi sunt a,{" "}
          <br />
          voluptatum quae fuga, nam, iure facere officiis excepturi maiores
          numquam maxime!
        </span>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
          <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={{duraction:3.5,type:'spring'}}
          className="w-mainCircle">
              <div className="w-secCircle">
                  <img src={Upwork} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Fiver} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Facebook} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Github} alt="" />
              </div>
              <div className="w-secCircle">
                  <img src={Amazon} alt="" />
              </div>
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
