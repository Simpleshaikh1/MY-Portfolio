import "./HeroImgStyles.css"

import React from 'react';

import IntroImg from "../assets/2.jpg"

import {Link} from "react-router-dom";

function Heroimg() {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} alt="IntroImg" className="into-img" />
        </div>
        <div className="content">
            <p>Hi, I'M A FREELANCER.</p>
            <h1>Fullstack Developer.</h1>
            <div>
                <Link to="/project" className="btn">
                        Projects
                </Link>
                <Link to="/contact" className="btn btn-light">
                        Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg