import './StyleCarousel.css';
import React from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Slides from './Slides/Slides';

export default class StyleCarousel extends React.Component {
    render() {
        return (
            <div>
                <h2 className='h2question'>10 Common Styles</h2>
                <CarouselProvider
                    naturalSlideWidth={75}
                    isIntrinsicHeight='true'
                    totalSlides={10}
                    touchEnabled='true'
                >
                    <Slider>
                        <Slides />
                    </Slider>
                    <ButtonBack className='carousel-back-btn carousel-btn'>{'\u276E'}</ButtonBack>
                    <ButtonNext className='carousel-next-btn carousel-btn'>{'\u276F'}</ButtonNext>
                    <DotGroup className='carousel-dots'/>
                </CarouselProvider>
            </div>
        );
    }
}