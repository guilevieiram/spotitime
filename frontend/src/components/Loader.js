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
            <p>Wait while we create your playlist! This might take a minute ...</p>
        </div>
    )
}

export default Loader