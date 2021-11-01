import React from 'react';
import '../styles/Footer.css';
import webLogo from '../assets/web-logo.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import whatsapp from '../assets/whatsapp.png';


function Footer ({}) {
    return (
        <div className="Footer">
            <p>© Guile Vieira</p>
            <div className="links">
                <a href="https://guile.ga"><img src={webLogo} alt="" /></a>
                <a href="https://github.com/guilevieiram"><img src={github} alt="" /></a>
                <a href="https://wa.me/5531998524668"><img src={whatsapp} alt="" /></a>
                <a href="mailto:guilhermevmanhaes@gmail.com"><img src={gmail} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer