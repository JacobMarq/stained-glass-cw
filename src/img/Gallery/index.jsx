import One from './1.jpg';
import Two from './2.jpg';
import Four from './4.jpg';
import Five from './5.jpg';
import Six from './6.jpg';
import Seven from './7.jpg';
import Eight from './8.jpg';
import Nine from './9.jpg';
import Ten from './10.jpg';
import Eleven from './11.jpg';
import Twelve from './12.jpg';
import Thirteen from './13.jpg';
import Fourteen from './14.jpg';
import Fifteen from './15.jpg';
import Sixteen from './16.jpg';
import Seventeen from './17.jpg';
import React from 'react';

const Modules = [
    {id: 1, mod: One},
    {id: 2, mod: Two},
    {id: 4, mod: Four},
    {id: 5, mod: Five},
    {id: 6, mod: Six},
    {id: 7, mod: Seven},
    {id: 8, mod: Eight},
    {id: 9, mod: Nine},
    {id: 10, mod: Ten},
    {id: 11, mod: Eleven},
    {id: 12, mod: Twelve},
    {id: 13, mod: Thirteen},
    {id: 14, mod: Fourteen},
    {id: 15, mod: Fifteen},
    {id: 16, mod: Sixteen},
    {id: 17, mod: Seventeen}
    ];

const Images = Modules.map(module => {
        return (
            <img key={module.id} src={module.mod} className='gallery-img layered-shadow' alt=''></img>
        );
    });

export default Images