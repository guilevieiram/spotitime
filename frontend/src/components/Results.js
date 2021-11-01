import React from 'react';
import '../styles/Results.css';

import spotifyUriTest from '../assets/spotify_uri_test.png';

function Results ({}) {
    return (
        <div className="Results">
            <p className="playlist-name">The best of xx/xx/xxxx</p>
            <img src={spotifyUriTest} alt="" className="uri" />
            <button className="listen-button">listen</button>
        </div>
    )
}

export default Results