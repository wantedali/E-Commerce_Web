import React, { useState, useEffect } from 'react';
import hand_icon from '../Assets/hand_icon.png'; // Assuming you have imported your images correctly
import arrow_icon from '../Assets/arrow.png';
import hero_image1 from '../Assets/hero_image.png'; // New image imports
import hero_image2 from '../Assets/hero_image2.png'; // New image imports
import './Hero.css'; // Import your CSS file

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(hero_image1); // Initial image

    useEffect(() => {
        // Function to switch between images
        
        const switchImages = () => {
            setCurrentImage(currentImage === hero_image1 ? hero_image2 : hero_image1);
        };

        // Set interval to switch images every 5 seconds (adjust as needed)
        const intervalId = setInterval(switchImages, 3000);

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [currentImage]); // Depend on currentImage to re-run effect when it changes

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
            <div className='hero-right'>
                <img src={currentImage} alt="" />
            </div>
        </div>
    );
}

export default Hero;