import './Gallery.css';
import React from 'react';
import Masonry from 'react-masonry-css';
import Images from '../../img/Gallery/index';

export default class Gallery extends React.Component {
    render() {
        return (
            <div className='gallery-container unselectable'>
                <Masonry 
                    breakpointCols={{
                                    default: 2,
                                    800: 1,
                                    }}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid-column'>
                    {Images}
                </Masonry>
            </div>
        );
    }
}