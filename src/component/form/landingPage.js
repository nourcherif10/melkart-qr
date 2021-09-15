import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa';

const landingPage = () => {
    return(
        <div class="body">
    <div className="container">
        <div className="logo"><img className="brand" src="/melkart.png" width="180"
            height="180"/></div>
        <div className="welcome-text">
            <h1>Welcome among the best student movement </h1>
            <div className="links">
            <NavLink to="/form" >Projects</NavLink>
            <NavLink to="/Marketing" >Marketing</NavLink>
            <NavLink to="/Devco" >dev co</NavLink>
            </div>
            
        </div>
        <div>
            <ul className="footer-list">
                <div className="social-icons">
                    <a href="https://www.facebook.com/Enicarthage.Junior.Entreprise" className="social-icon facebook">
                        <span className="icon__inner">
                        <FaFacebook size={40}/>
                        </span>
                    </a>
    
                    <a href="https://www.youtube.com/channel/UCB3dah_szpBGypXHMwuTveg" className="social-icon youtube">
                        <span className="icon__inner">
                        <FaYoutube size={40}/>  
                        </span>
                    </a>
                    <a href="https://www.instagram.com/melkart_je/?hl=fr" className="social-icon instagram">
                        <span className="icon__inner">
                        <FaInstagram size={40}/> 
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/melkart-junior-entreprise/" className="social-icon linkedin">
                        <span className="icon__inner">
                        <FaLinkedin size={40}/> 
                        </span>
                    </a>
                    </div>
            </ul>
        </div>
        <div className="copyright-area">
             
            <div className="copyright-area-content">
                <p>
                    &copy; Copyright 2021 <a href="#">MELKART JUNIOR ENTREPRISE</a> All Rights Reserved.
                </p>
            </div>
    </div>
    </div>
    </div>

    );
}
export default landingPage ;