import React from 'react';
import SocialLink from './SocialLink/SocialLink'
import { SocialMediaData } from './SocialMediaData'
import './SocialLinks.css'

const SocialLinks = () => {
    return ( 
        <div className="social-links">
            {SocialMediaData.map((item) => {
                return (
                    <SocialLink key={item.order} media={item} />
                )
            })}
        </div>
     );
}
 
export default SocialLinks;