import React, { useState } from 'react';
import './MessageForm.css';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_r804nOGQUMwCKNliBD6xt');

const MessageForm = props => {
        const [statusMessage, setStatusMessage] = useState("");
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => {
            const form = document.querySelector('#contact-form');
            const statusMessage = document.querySelector('.status-message');
            generateContactNumber();

            sendForm('default_service', 'portfolio-contact-form', form)
                .then(function(response) {
                    setStatusMessage("Message sent successfully!");
                    form.reset();
                    statusMessage.className = "status-message p-10 text-center success";
                    setTimeout(()=> {
                        statusMessage.className = 'status-message'
                    }, 5000);
                }, function(error) {
                    setStatusMessage("Failed to send message! " + error.text);
                    statusMessage.className = "status-message p-10 text-center failure";
                    setTimeout(()=> {
                        statusMessage.className = 'status-message'
                    }, 5000);
                });
        };

        const message = watch('message') || "";
        const messageCharsLeft = 1500 - message.length;
        const [contactNumber, setContactNumber] = useState("000000");

        const generateContactNumber = () => {
            const numStr = "000000" + (Math.random() * 1000000 | 0);
            setContactNumber(numStr.substring(numStr.length - 6));
        }

        return (
            <div className="message-form-card">
                <h1 className="h1question unselectable mb-5">Send a Message</h1>
                <p className="status-message">{statusMessage}</p>
                
                <form id='contact-form' onSubmit={ handleSubmit(onSubmit) }>
                    
                    <input type='hidden' name='contact_number' value={contactNumber} />

                    <div className='input-container'>
                        <p className='input-label'>Full Name: </p>
                        <div className='input-wrapper'>
                            <input 
                            className="input-text"
                            type='text'
                            maxLength='30'
                            aria-invalid={errors.user_name ? 'true' : 'false'}
                            {...register('user_name', { required: true }) } 
                            placeholder='Name' />
                            {errors.user_name && errors.user_name.type === "required" && (
                                <div className='input-alert' role='alert'>Name is required</div>
                            )}
                        </div>
                    </div>
                    <br/>
                    
                    <div className='input-container'>
                        <p className='input-label'>Email: </p>
                        <div className='input-wrapper'>
                            <input 
                            className="input-text"
                            type='email'
                            aria-invalid={errors.user_email ? 'true' : 'false'}
                            {...register('user_email', { required: true }) } 
                            placeholder='Email' />
                            {errors.user_email && errors.user_email.type === "required" && (
                                <div className='input-alert' role='alert'>Email is required</div>
                            )}
                        </div>
                    </div>
                    <br/>

                    <div className='input-container'>
                        <p className='input-label'>Main Phone: </p>
                        <div className='input-wrapper'>
                            <input 
                            className="input-text"
                            type='phone_number'
                            aria-invalid={errors.user_phone_number ? 'true' : 'false'}
                            {...register('user_phone_number', { required: true }) } 
                            placeholder='Phone Number' />
                            {errors.user_phone_number && errors.user_phone_number.type === "required" && (
                                <div className='input-alert' role='alert'>Phone Number is required</div>
                            )}
                        </div>
                    </div>
                    <br/>
                    
                    <div className='input-container'>
                        <p className='input-label'>Service: </p>
                        <div className='input-wrapper'>
                            <select 
                                defaultValue={props.selectServiceValue}
                                aria-invalid={errors.requested_service ? 'true' : 'false'}
                                {...register('requested_service', { required: true }) } >

                                <option value="Glass">Glass</option>
                                <option value="Mirror">Mirror</option>
                                <option value="Stained Glass">Stained Glass</option>
                                <option value="Shower Door">Shower Door</option>
                                <option value="Table Top">Table Top</option>
                                <option value="Dual Glass">Dual Glass</option>
                                <option value="Vinyl Window">Vinyl Window</option>
                                <option value="Stained Glass Repair">Stained Glass Repair</option>
                                <option value="Custom Installation">Custom Installation</option>
                            </select>
                        </div>
                    </div>
                    <br/>

                    <p>Message</p>
                    <textarea 
                    className="input-text message-block"
                    maxLength='1500'
                    aria-invalid={errors.message ? 'true' : 'false'}
                    {...register('message', { required: true }) } 
                    placeholder='Message' />
                    <div className='text-under-message mb-5'>
                        {errors.message && errors.message.type === "required" && (
                            <div className='input-alert' role='alert'>Message is required</div>
                        )}
                        <p className='char-limit'>{ messageCharsLeft }</p>
                    </div>
                    <br/>

                    {!props.recaptcha || props.recaptchaError ? 
                        <button onClick={(e) => props.handleInvalidRecaptcha(e)} className='unselectable contact-btn mb-5'>
                            Send Message
                        </button>
                        :
                        <input className='unselectable contact-btn mb-5' type='submit' value='Send Message' />
                    }
                </form>
            </div>
        );
}

export default MessageForm;