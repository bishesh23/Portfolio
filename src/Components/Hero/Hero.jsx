import React from "react";
import './Hero.css'
import IMG_1027 from '../../assets/IMG_1027.jpg'
const Hero = () => {
    return (
        <div className="hero">
            <img src={IMG_1027} />
            <h1> <span>I am Bishesh Amatya,</span> student at University of Bamberg </h1>
            <p> I am from Nepal and live in a beautiful city called Bamberg. </p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">My resume </div>
            </div>
        </div>
    )
}

export default Hero