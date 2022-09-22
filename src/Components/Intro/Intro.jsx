import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedind from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/1.png"
import Thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Glassesimoji from "../../img/glassesimoji.png"
import FlotingDiv from "../FlotingDiv/FlotingDiv";
import {motion} from 'framer-motion'

const transition = {duraction : 2,type:'spring'}

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span>Sachin Kavindu</span>
          <span>
            Frontend Developer with some experience in web design and
            development producting the Quaity work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
         <a href="https://github.com/bestkavindu" target="_blank"> <img src={Github} alt="" /></a>
          <a href="https://facebook.com/bestkavindu" target="_blank"><img src={Linkedind} alt=""/></a>
          <a href="" target="_blank"></a><img src={Instagram} alt=""/>

          
        </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={Boy} alt=""/>
          <motion.img
          initial={{left:'-36%'}}
          whileInView={{left:'-24%'}}
          transition={transition} src={Glassesimoji} alt=""/>
          <motion.div 
                    initial={{left:'-4'}}
                    whileInView={{left:'68%'}}
                    transition={transition}>
              <FlotingDiv  image={Crown} txt1='Web' txt2='Developer'
              className="floting-div" />
          </motion.div>
          <motion.div
                              initial={{left:'9rem'}}
                              whileInView={{left:'0rem'}}
                              transition={transition} >
              <FlotingDiv className="floting-div" image={Thumbup} txt1='Entertainments'/>
          </motion.div>
          {/* bluer divds */}
          <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
          <div className="purple" style={{background:"rgb(238 210 255)"}}></div>

      </div>
    </div>
  );
}

export default Intro;
