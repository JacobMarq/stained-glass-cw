import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
    let menuClasses = ['dropdown-menu-wrapper'];

    if(props.show) {
        menuClasses = ['dropdown-menu-wrapper', ' active'];
    }
    return (
        <div className={menuClasses.join('')}>
            <ul className='dropdown-menu'>
                <li>
                    <Link to='/' onClick={props.click}>Home</Link>
                </li>
                <li>
                    <Link to='/gallery' onClick={props.click}>Gallery</Link>
                </li>
                <li>
                    <Link to="/about" onClick={props.click}>About Us</Link>
                </li>
                <li>
                    <Link to="/services" onClick={props.click}>Services</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;