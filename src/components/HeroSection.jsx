import React from 'react';
import './HeroSection.scss'

function HeroSection(props) {
    return (
        <>
            <div className="background-image"
                 style={{backgroundImage: "url('../image/shoeib-abolhassani-GC2UHBFeTYA-unsplash.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="left-text-hero col-6">
                            <h1>Leisan Akhmetova</h1>
                            <p>I Would consider myself a commercial photographer and my true passion is product photography</p>
                            <button className="round-btn">Hire me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
