import React from 'react';
import '../styles/Logo.css';
import logoColorBlack from '../assets/logo-col-black.svg';
import nameColor from '../assets/name-col.svg';

function Logo ({}) {
    return (
        <div className="Logo">
            <img src={logoColorBlack} alt="Logo" className="logo-image"/>
            <img src={nameColor} alt="Name" className="name" />
        </div>
    )
}

export default Logo