import React, { useState, useEffect } from 'react';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image1 from '../Assets/hero_image5.jpg'; // New image imports
import hero_image2 from '../Assets/hero_image6.jpg'; // New image imports
import './Hero.css'; // Import your CSS file

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(hero_image1); // Initial image
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Function to switch between images
        const switchImages = () => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentImage(currentImage === hero_image1 ? hero_image2 : hero_image1);
                setIsAnimating(false);
            }, 500); // Adjust the duration of the animation as needed
        };


        const intervalId = setInterval(switchImages, 3500);


        return () => clearInterval(intervalId);
    }, [currentImage]); // Depend on currentImage to re-run effect when it changes
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
