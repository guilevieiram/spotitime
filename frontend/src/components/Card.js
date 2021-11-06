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
    const reset = () => setElement(elements[0]);
    const apiURL = 'https://spotitime.herokuapp.com/';

    async function request(date) {
        const endPoint = apiURL;
        const data = {
            date: date
        }
        const parameters = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
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

    (async function sanityCheck() {
        const endPoint = apiURL + "test";
        const parameters = {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        };
        await fetch(endPoint, parameters)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    })();


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
                    reset={reset}
                />
            </div>

        </div>
    )
}

export default Card