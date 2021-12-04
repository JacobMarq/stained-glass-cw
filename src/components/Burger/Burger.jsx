import './Burger.css'
import React from 'react'; 

const Burger = props => {
    let burgerClasses = ['burger'];

    if(props.active) {
        burgerClasses = ['burger', ' active']
    }

    return(
    <div className={burgerClasses.join('')} aria-label='burger-button' onClick={props.click}>
        <span />
    </div>
)};

export default Burger;