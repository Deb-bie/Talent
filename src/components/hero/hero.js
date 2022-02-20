import React, { useState } from 'react';
import "./hero.css";
import { Link } from "react-router-dom";
import Video from '../../assets/video/vid.mp4';



const Hero = () => {

    const [hover, setHover] = useState(false);

    const handleHover = () => {setHover(!hover)};


    return (
        <div className="main-container">
            <div className="main-background">
                <video className="video-background" autoPlay loop muted src={Video} typeof="video/mp4"></video>
            </div>


            <div className="main-content">
                <h1 className="title">
                    Behind-the-Wheel <br /> Driving Lessons
                </h1>

                <p className="p">
                    Whether it's your first time behind the wheel 
                    or you need a brush up before your test, we offer 
                    driving lessons that will make you a safer, more 
                    confident driver for life.
                </p>

                <div className="hero-btn">
                    <Link className="button" to="/register" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                        Get Started &nbsp; &nbsp; 
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Hero;
