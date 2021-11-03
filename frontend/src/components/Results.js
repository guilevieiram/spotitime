import React, {useState} from 'react';
import '../styles/Results.css';

import InfoBubble from './InfoBubble.js';

import spotifyUriTest from '../assets/spotify_uri_test.png';

function Results ({element, APIresponse}) {

    const responseCode = APIresponse.code;
    const [showError, setShowError] = useState(responseCode === -1 || responseCode === 0)
    const qrCodeLink = `https://scannables.scdn.co/uri/plain/png/000000/white/640/${APIresponse.uri}`
    
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
                <a href={APIresponse.uri}><img src={qrCodeLink} alt="URI" className="uri" /></a>
                <a href={APIresponse.uri}><button className="listen-button">Listen</button></a>
            </div>
            <a href="/"><button className="again-button">Try again!</button></a>
        </div>
    )
}

export default Results