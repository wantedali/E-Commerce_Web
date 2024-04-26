import React, { useState, useEffect } from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image1 from '../Assets/hero_image.png';
import hero_image2 from '../Assets/hero_image6.jpg';
import './Hero.css';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(hero_image1);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {

        const switchImages = () => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentImage(currentImage === hero_image1 ? hero_image2 : hero_image1);
                setIsAnimating(false);
            }, 300);
        };


        const intervalId = setInterval(switchImages, 3500);


        return () => clearInterval(intervalId);
    }, [currentImage]);

    return (
        <div className="hero">
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className={`hero-right ${isAnimating ? 'animate' : ''}`}>
                <img src={currentImage} alt="" />
            </div>
        </div>
    );
}

export default Hero;
