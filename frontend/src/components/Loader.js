import React from 'react';
import '../styles/Loader.css';

function Loader ({element}) {
    return (
        <div 
            className="Loader" 
            style={{
                display: element === 'Loader' ? 'flex' : 'none'
            }}
        >
            <div className="circle"></div>
        </div>
    )
}

export default Loader