import './Contact.css';
import React from 'react';
import MessageForm from './MessageForm/MessageForm';
import MailIcon from '../../img/CardIcons/Mail.png';
import PhoneCallIcon from '../../img/CardIcons/PhoneCall.png';
import ReCAPTCHA from 'react-google-recaptcha';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.service,
            recaptcha: false,
            recaptchaError: false,
        };
    };

    render() {
        const onChange = (e) => {
            if(e) {
                this.setState(prevState => {
                    return { ...prevState,
                             recaptcha: true,
                             recaptchaError: false
                    }
                });
            }
        }

        const onErrored = () => {
            this.setState(prevState => {
                return { ...prevState,
                         recaptcha: false,
                         recaptchaError: true
                }
            });
        }

        const onExpired = () => {
            this.setState(prevState => {
                return { ...prevState,
                         recaptcha: false,
                         recaptchaError: false
                }
            });
        }

        const handleInvalidRecaptcha = (e) => {
            e.preventDefault();
            this.setState(prevState => {
                return { ...prevState,
                         recaptcha: false,
                         recaptchaError: true
                }
            });
        }

        return (
            <div>
                <h1 className='h1question unselectable'>Have Questions?</h1>
                <h1 className='h1question mb-7-5 unselectable'>Need a Quote?</h1>

                <div className='contact-cards'>
                    <div className='card layered-shadow'>
                        <div className='card-body'>
                            <img src={PhoneCallIcon} className='card-icon' alt='CardIconLicensed'/>
                            <h2 className='card-title'>Phone</h2>
                            <p className='card-desc'>Speak to a licensed professional.</p>
                            <a className='card-btn unselectable' href="tel:+17142321214">Call Now</a>
                        </div>
                    </div>

                    <div className='card layered-shadow'>
                        <div className='card-body'>
                            <img src={MailIcon} className='card-icon' alt='CardIconLicensed'/>
                            <h2 className='card-title'>Email</h2>
                            <p className='card-desc'>Please include your requested service in the subject line.</p>
                            <a className='card-btn unselectable' href="mailto:sgcwcuriel77@gmail.com">Email Now</a>
                        </div>
                    </div>
                </div>

                <MessageForm 
                    selectServiceValue={this.state.value}
                    recaptcha={this.state.recaptcha}
                    recaptchaError={this.state.recaptchaError}
                    handleInvalidRecaptcha={handleInvalidRecaptcha}
                />
                <ReCAPTCHA
                    className='recaptcha'
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                    onChange={(e) => onChange(e)}
                    onErrored={() => onErrored()}
                    onExpired={() => onExpired()}
                />
                <div className='text-under-message mb-5'>
                    {this.state.recaptchaError && (
                        <div className='input-alert' role='alert'>Captcha is required</div>
                    )}
                </div>
            </div>
        );
    }
}