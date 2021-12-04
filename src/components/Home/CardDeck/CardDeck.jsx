import './CardDeck.css'
import React from "react";
import Custom from '../../../img/card icons/Custom.png';
import Licensed from '../../../img/card icons/Licensed.png';
import Variety from '../../../img/card icons/Variety.png';

export default class CardDeck extends React.Component {
    render() {
        return (
            <div className='card-deck'>
                <div className='card layered-shadow'>
                    <div className='card-body'>
                        <img src={Variety} className='card-icon' alt='CardIconVariety'/>
                        <h3 className='card-title unselectable'>
                            VARIETY
                        </h3>
                        <p className='card-desc'>
                            Curiel offers windows, doors, and custom glass work
                            with an extensive variety of styles and materials. 
                        </p>
                        <a href='/gallery' className='card-btn unselectable'>View our gallery</a>
                    </div>
                </div>

                <div className='card layered-shadow'>
                    <div className='card-body'>
                        <img src={Licensed} className='card-icon' alt='CardIconLicensed'/>
                        <h3 className='card-title unselectable'>
                            LICENSED PROFESSIONALS
                        </h3>
                        <p className='card-desc'>
                            With over 23 years in the industry, we have a
                            commitment to our customers to provide a
                            quality service every time.
                        </p>
                        <a href='/about' className='card-btn unselectable'>Learn about us</a>
                    </div>
                </div>
                
                <div className='card layered-shadow'>
                    <div className='card-body'>
                        <img src={Custom} className='card-icon' alt='CardIconCustom'/>
                        <h3 className='card-title unselectable'>
                            CUSTOM WORK
                        </h3>
                        <p className='card-desc'>
                            No matter your next home renovation project,
                            Curiel Windows is here to make your dream a
                            reality.
                        </p>
                        <a href='/services' className='card-btn unselectable'>View our services</a>
                    </div>
                </div>
            </div>
        );
    }
}