import './Footer.css'
import React from "react";
import Icon from '../../img/new_jpg/StainedGlassCWIcon.jpg'

export default class Footer extends React.Component {
    render() {
        return(
            <footer className='foot-panel'>
                <div className='foot-cta-bar unselectable'>
                    <h2 className='foot-cta-quote brand-name-color'>Don't hold off on your home improvement needs !</h2>
                    <a href='/contact' className='footer-cta'>Get A Quote</a>
                    <h3 className='card-body card-desc mt-2-5 mb-0'>Home window replacement experts serving</h3>
                    <h3 className='card-body card-desc mt-2-5 mb-2-5'>Orange County, Inland Empire, {'&'} Los Angeles County.</h3>
                </div>
                <div className='footer-row'>
                    <div className='footer-column-one'>
                    <img src={Icon} className='footer-icon unselectable' alt='CardIconLicensed'/>
                        <ul>
                            <li>
                                <a href='tel:+19515306161'>{'\u260E'}: 951-530-6161</a>
                            </li>
                            <li>
                                <a href="tel:+17142321214">{'\u260E'}: 714-232-1214</a>
                            </li>
                            <li>
                                <a href="mailto:stainedglasscw@gmail.com">{'\u2709'}: stainedglasscw@gmail.com</a>
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
                </div>
            </footer>
        );
    }
}