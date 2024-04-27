import React, { useState, useEffect } from 'react';
import hand_icon from '../Assets/hand_icon.png'; // Assuming you have imported your images correctly
import arrow_icon from '../Assets/arrow.png';
// import hero_image1 from '../Assets/hero_image5.jpg'; // New image imports
// import hero_image2 from '../Assets/hero_image6.jpg'; // New image imports
import hero_image3 from '../Assets/hero_image.png'; // New image imports
import Fashion_Models from '../Assets/Fashion_Models.png'; // New image imports
import Hero_image10 from '../Assets/Hero_image10.png'; // New image imports
import './Hero.css'; // Import your CSS file

const heroImages = [ hero_image3, Fashion_Models, Hero_image10];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const switchImages = () => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
                setIsAnimating(false);
            }, 500); // This is the timeout for the animation
        };

        const intervalId = setInterval(switchImages, 3500); // This is the interval at which images change

        return () => clearInterval(intervalId);
    }, []); // No dependencies, this effect runs once on mount

    const currentImage = heroImages[currentIndex];
    return (
        <div className="hero">
            <div className='hero-left'>
                <h2>
                    NEW ARRIVALS ONLY
                </h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>
                        Latest Collection
                    </div>
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