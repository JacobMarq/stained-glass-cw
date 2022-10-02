import './Footer.css'
import React from "react";
import { Link } from 'react-router-dom';
import Icon from '../../img/Brand/StainedGlassCWIcon.jpg'
import { NavLink } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className='foot-panel'>
                <div className='foot-cta-bar unselectable layered-shadow'>
                    <h2 className='foot-cta-quote'>Don't hold off on your home improvement needs !</h2>
                    <Link to='stained-glass-cw/contact' className='footer-cta'>Get A Quote</Link>
                    <div className='card-body card-desc mt-2-5 mb-2-5'>
                        <span className="foot-subtext">
                            Home window replacement experts serving
                            Orange County, Inland Empire, {'&'} Los Angeles County.
                        </span>
                    </div>
                </div>
                <div className='footer-row mt-2-5'>
                    <nav className='footer-nav'>
                        <a href='/stained-glass-cw/' className='footer-home'>
                            <img src={Icon} className='footer-icon unselectable' alt='CardIconLicensed'/>
                        </a>
                        <div className='footer-nav-list'>
                            <NavLink to="/stained-glass-cw/" activeclassname="nav-link active" className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/stained-glass-cw/gallery" activeclassname="nav-link active" className="nav-link">
                                Gallery
                            </NavLink>
                            <NavLink to="/stained-glass-cw/about" activeclassname="nav-link active" className="nav-link">
                                About Us
                            </NavLink>
                            <NavLink to="/stained-glass-cw/services" activeclassname="nav-link active" className="nav-link">
                                Services
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div className='footer-row'>
                    <ul className='footer-list'>
                        <li>
                            <a href='tel:+19515306161'>{'\u260E'}: 951-530-6161</a>
                        </li>
                        <li>
                            <a href="tel:+17142321214">{'\u260E'}: 714-232-1214</a>
                        </li>
                        <li>
                            <a href="mailto:sgcwcuriel77@gmail.com">{'\u2709'}: sgcwcuriel77@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/4214+Harrison+St,+Riverside,+CA+92503">{'\u2617'}: 4214 Harrison St. Riverside CA 92503</a>
                        </li>
                        <li>Lic #12359494</li>
                    </ul>
                </div>
            </footer>
        );
    }
}