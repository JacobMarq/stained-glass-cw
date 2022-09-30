import './Home.css';
import React from 'react';
import Banner from './Banner/Banner';
import CardDeck from './CardDeck/CardDeck';
import StyleCarousel from './StyleCarousel/StyleCarousel';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className='info-card-wrapper'>
                    <h2 className='h2question unselectable'>Why Curiel Windows?</h2>
                    <CardDeck />
                </div>
                <StyleCarousel />
            </div>
        );
    }
} 