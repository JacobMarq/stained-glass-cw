import './Menu.css';
import React from 'react';

const Menu = props => {
    let menuClasses = ['dropdown-menu-wrapper'];

    if(props.show) {
        menuClasses = ['dropdown-menu-wrapper', ' active'];
    }
    return (
        <div className={menuClasses.join('')}>
            <ul className='dropdown-menu'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/gallery'>Gallery</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;