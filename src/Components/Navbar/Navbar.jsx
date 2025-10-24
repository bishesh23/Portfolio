import React from "react";
import './Navbar.css'
import back from '../../assets/back.jpg'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src= {back} className="nav-logo"></img> 
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services </li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    ) 
}

export default Navbar