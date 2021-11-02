import React, {useState} from 'react';
import '../styles/Results.css';

import InfoBubble from './InfoBubble.js';

import spotifyUriTest from '../assets/spotify_uri_test.png';

function Results ({element, APIresponse}) {

    const responseCode = APIresponse.code;
    const [showError, setShowError] = useState(responseCode === -1)

    return (
        <div 
            className="Results"
            style={{
                display: element === 'Results' ? 'flex' : 'none'                         
            }}
        >
            <InfoBubble 
                title="Whops... "
                text= {<>We are experiencing some problems in our servers right now... Try again later or contact me in <a href="https://guile.ga">here</a>!</>}
                toggleAction={() => setShowError(!showError)}
                show={showError}
            />
            <div 
                className="results-container"
                style={{
                    display: responseCode === 1 ? 'block' : 'none'
                }}
            >
                <p className="playlist-name">{APIresponse.name}</p>
                <img src={spotifyUriTest} alt="URI" className="uri" />
                <a href={APIresponse.link}><button className="listen-button">Listen</button></a>
            </div>
            <a href="/"><button className="again-button">Try again!</button></a>
        </div>
    )
}

export default Results