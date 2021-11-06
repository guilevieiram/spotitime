import React, {useState} from 'react';
import '../styles/DateSelector.css';

import InfoBubble from './InfoBubble.js';


function DateSelector ({element, request}) {

    const [date, setDate] = useState("1999-12-31");
    const [showInfo, setShowInfo] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const response = request(date)
        console.log(response)
    }
    const onChange = (event) => {
        setDate(event.target.value)
    }
    const toggleInfo = () => setShowInfo(!showInfo)

    return (
        <div 
            className="DateSelector" 
            style={{
                display: element === 'DateSelector' ? 'flex' : 'none'
            }}
        >
            <InfoBubble 
                show={showInfo}
                toggleAction={toggleInfo}
                title="What is this app?"
                text={<>This is a web application that creates playlists that take you back in time! All you need to do is enter a date, wait a few seconds while we search the songs and ... thats it! You will receive a playlist with the most played songs from that period when you met your partner or when you did that amazing trip! More info about this project on my <a href="https://github.com/guilemvieira">GitHub</a> page or in my WebPage <a href="https://guile.ga">guile.ga</a>.</>}
            />
            <div className="form-header">
                <p className="form-title">Enter a date:</p>
                <p 
                    className="info"
                    onClick={toggleInfo}
                >?</p>
            </div>


            <form 
                action="" 
                method="get" 
                className="date-selector-form"
                onSubmit={handleSubmit}
            >
                <input className="date-selector" type="date" name="" id=""  required 
                    value={date} min="1960-01-01" max="2021-11-01"
                    onChange={onChange}
                />
                <input type="submit" value="Create playlist" className="button-fill"/>
            </form>
        </div>
    )
}

export default DateSelector