import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { CarouselData } from './CarouselData'

const PATH = '../images/'

const CarouselWrapper = () => {
    return ( 
        <Carousel
            centerMode={true} 
            centerSlidePercentage={80} 
            showStatus={false}
            showThumbs={false} 
            showIndicators={false}
        >
            {CarouselData.map((item) => {
                return (
                    <div key={item.alt}>
                        <img src={PATH + item.image} alt={item.alt} className="carousel-img"/>
                    </div>
                )
            })}
        </Carousel> 
     );
}
 
export default CarouselWrapper;