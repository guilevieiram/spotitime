import React from 'react';
import '../styles/InfoBubble.css';

function InfoBubble ({show, toggleAction, title, text}) {
    return (
        <div className="InfoBubble"
            style={{
                display: show ? 'block' : 'none'
            }}
            onClick={toggleAction}
        >
            <h2 className="info-title">{title}</h2>
            <p className="info-text">{text}</p>
        </div>
    )

}

export default InfoBubble