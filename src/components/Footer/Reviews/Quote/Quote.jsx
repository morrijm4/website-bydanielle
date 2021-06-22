import React from 'react';
import './Quote.css'

const Quote = (props) => {
    return ( 
        <div className="quote">
            <h1>"{props.children}"</h1>
            <p>— {props.person}</p>
        </div>
     );
}
 
export default Quote;