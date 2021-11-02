import React, {useState} from 'react';
import '../styles/Card.css';

import DateSelector from './DateSelector.js';
import Loader from '../components/Loader.js';
import Results from '../components/Results.js';


function Card ({}) {

    const elements = ['DateSelector', 'Loader', 'Results']
    const [element, setElement] = useState(elements[0])
    const [APIresponse, setAPIresponse] = useState({
        code: 0,
        link: '',
        name: ''
    })

    async function request(url, date) {
        const endPoint = url;
        const data = {
            date: date
        }
        const parameters = {
            method: 'POST',
            body: JSON.stringify(data)
        };
    
        setElement(elements[1])
        
        await fetch(endPoint, parameters)
        .then( response => {
            return response.json();
        })
        .then( data => {
            setElement(elements[2])
            setAPIresponse(data)
        })
        .catch( error => {
            setElement(elements[2])
            console.log('Error: ', error)
        });
    }

    return (
        <div className="Card">
            <div className="card-inner-container">
                <DateSelector 
                    element={element}
                    request={request}
                />
                <Loader 
                    element={element}
                />
                <Results 
                    element={element}
                    APIresponse={APIresponse}
                />
            </div>

        </div>
    )
}

export default Card