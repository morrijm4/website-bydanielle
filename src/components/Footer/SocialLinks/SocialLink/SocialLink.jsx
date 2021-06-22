import React from 'react';
import './SocialLink.css';

const SocialLink = (props) => {
    return ( 
        <a href={props.media.url} className="social-link">
            <i className={props.media.icon}></i>
        </a>
     );
}
 
export default SocialLink;