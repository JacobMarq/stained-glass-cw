import './Contact.css';
import React from 'react';
import MessageForm from './MessageForm/MessageForm';
import MailIcon from '../../img/CardIcons/Mail.png';
import PhoneCallIcon from '../../img/CardIcons/PhoneCall.png';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.service};
    };

    render() {
        return (
            <div>
                <h1 className='h1question unselectable'>Have Questions?</h1>
                <h1 className='h1question mb-7-5 unselectable'>Need a Quote?</h1>

                <div className='contact-cards'>
                    <div className='card layered-shadow'>
                        <div className='card-body'>
                            <img src={PhoneCallIcon} className='card-icon' alt='CardIconLicensed'/>
                            <h2 className='card-title'>Phone</h2>
                            <p className='card-desc'>Give us a call</p>
                            <a className='card-btn unselectable' href="tel:+17142321214">Call Now</a>
                        </div>
                    </div>

                    <div className='card layered-shadow'>
                        <div className='card-body'>
                            <img src={MailIcon} className='card-icon' alt='CardIconLicensed'/>
                            <h2 className='card-title'>Email</h2>
                            <p className='card-desc'>Send an email</p>
                            <a className='card-btn unselectable' href="mailto:sgcwcuriel77@gmail.com">Email Now</a>
                        </div>
                    </div>
                </div>

                <MessageForm selectServiceValue={this.state.value}/>
            </div>
        );
    }
}