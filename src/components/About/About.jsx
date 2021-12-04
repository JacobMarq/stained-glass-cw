import './About.css';
import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className='about-container'>
                <div className='about-card layered-shadow'>
                    <h1 className='about-header'>Octavio Curiel</h1>
                    <h2 className='about-subhead'>Owner, CEO, and Licensed professional</h2>
                    <p className='about-desc'>
                        Hello, My name is Octavio Curiel.
                        I am an enterprising person, persistant,
                        creative, and artistic. I have a passion
                        for art; my dream has been to create art
                        for families through my craft that
                        represents their tastes and comfort in
                        their homes. With 23 years of experience
                        in the industry, I offer my work with a
                        strong sense of professionalism, care,
                        and responsibility. I love what I do, 
                        but I love more the happiness I bring to
                        a satisfied customer through my work.
                    </p>
                </div>
            </div>
        );
    }
}