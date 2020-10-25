import React from 'react';
import './Works.css'
import car1 from '../../../images/carousel-1.png';
import car2 from '../../../images/carousel-2.png';
import car3 from '../../../images/carousel-3.png';
import car4 from '../../../images/carousel-4.png';
import car5 from '../../../images/carousel-5.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
    const images = [car1,car2, car3, car4, car5];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="">
            <div className="mt-4 pt-3">
                <h3 className="gap text-center"><strong> <span className="text-white">Here are some of</span> <span style={{ color: '#7AB259' }}>our works</span></strong></h3>
            </div>
            <Slider className="mx-2" {...settings}>
                {
                    images.map((each , index) => <img src={each} key={index} className="p-2 mx-2" alt=""/> )
                }  
            </Slider>
        </div >
    );
};

export default Works;