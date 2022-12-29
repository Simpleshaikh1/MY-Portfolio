import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/images.png"
import React2 from "../assets/images.png"

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I</h1>
            <p>
                I am a React and Node Fullstack developer. I create
                responsive secure websites for my clients
            </p>
            <Link to = "/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src = {React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src = {React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent