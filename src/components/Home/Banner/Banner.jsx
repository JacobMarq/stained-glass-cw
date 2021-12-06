import './Banner.css';
import React from 'react';
import BannerImg from '../../../img/Banner/px1.jpg';

export default class Banner extends React.Component {
    render() {
        return (
            <div className='banner-container layered-shadow unselectable'>
                <img src={BannerImg} className='bannerimg' alt='BannerImage'/>
                <div className='banner-cover'>
                    <p className='banner-question'>Have home improvement or repair needs for your home?</p>
                    <div className='banner-answer'><span className='brand-name-color'>CURIEL WINDOWS</span> has you covered</div>
                    <p className='banner-cta-cap'>Get a quote today</p>
                    <a href='/contact' className='banner-cta'>Let's Get Started</a>
                </div>
            </div>
        );
    }
}