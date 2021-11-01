import React from 'react';
import '../styles/DateSelector.css';

function DateSelector ({}) {
    return (
        <div className="DateSelector">
            <p>Enter a date:</p>
            <form action="" method="get" className="date-selector-form">
                <input className="date-selector" type="date" name="" id=""  />
            </form>
        </div>
    )
}

export default DateSelector