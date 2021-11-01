import React from 'react';
import '../styles/Card.css';

import DateSelector from '../components/DateSelector.js';
import SearchButton from '../components/SearchButton.js';
import Loader from '../components/Loader.js';
import Results from '../components/Results.js';


function Card ({}) {
    return (
        <div className="Card">
            <div className="card-inner-container">
                <DateSelector />
                {/* <SearchButton /> */}
                {/* <Loader /> */}
                <Results />
            </div>

        </div>
    )
}

export default Card