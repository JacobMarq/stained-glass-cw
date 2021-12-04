import './Gallery.css';
import React from 'react';
import Masonry from 'react-masonry-css';
import Images from '../../img/Gallery/index';

export default class Gallery extends React.Component {
    render() {

        // const img = Images
        // console.log(img['1.jpg'])

        // const Items = Images.forEach(item => {
        //     return <img src={item}></img>
        // });

        return (
            <div className='gallery-container unselectable'>
                <Masonry 
                    breakpointCols={{
                                    default: 3,
                                    800: 2,
                                    }}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'>
                    {Images}
                </Masonry>
            </div>
        );
    }
}