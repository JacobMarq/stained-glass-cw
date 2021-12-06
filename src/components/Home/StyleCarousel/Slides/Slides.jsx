import React from 'react';
import { Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Styles from './Styles';

const Slides = () => {

    return(
        Styles.map((style, index) => {
            return(
                <Slide key={index} index={index}>
                    <div className='slide-container card-body'>
                        <Image className='styles-image' src={style.image} alt='style img'/>
                        <h2 className='card-title mt-5 mb-0'>{style.title}</h2>
                        <p className='card-desc mt-2-5'>{style.desc}</p>
                    </div>
                </Slide>
            );
        })
    );
}

export default Slides;