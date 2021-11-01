import React from 'react';
import '../styles/Footer.css';
import webLogo from '../assets/web-logo.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import facebook from '../assets/facebook.png';


function Footer ({}) {
    return (
        <div className="Footer">
            <p>© Guile Vieira - 2021</p>
            <div className="links">
                <img src={webLogo} alt="" />
                <img src={github} alt="" />
                <img src={facebook} alt="" />
                <img src={gmail} alt="" />
            </div>
        </div>
    )
}

export default Footer