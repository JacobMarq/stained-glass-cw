import React from "react";
import { useNavigate } from "react-router";

const Services = [
    'Glass',
    'Mirror',
    'Stained Glass',
    'Shower Door',
    'Table Top',
    'Dual Glass',
    'Vinyl Window',
    'Stained Glass Repair',
    'Custom Installation',
];

const ServicesList = props => {
    let navigate = useNavigate();

    const makeRequest = (service) => {    
        props.request(service);
        navigate('/stained-glass-cw/contact')
    }

    return(
        <ul className='service-list'>
            {Services.map((service, index) => {
                return(
                    <li className='layered-shadow' key={index}>
                        <div>
                            <p className="service-title">{service}</p>
                            <button href='/stained-glass-cw/contact'
                            onClick={() => makeRequest(service)}
                            className='service-request-btn' 
                            aria-label='request-service'>
                                <span className='service-request'>
                                    &nbsp; Request service &nbsp; &#8250; &nbsp;
                                </span>
                                <span className="request-btn-mobile">
                                    &#8250;
                                </span>
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default ServicesList;