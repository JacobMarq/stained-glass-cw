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
    'Custom Installation'
];

const ServicesList = props => {
    let navigate = useNavigate();

    function makeRequest(service) {    
        props.request(service);
        navigate('/stained-glass-cw/contact')
    }

    return(
        Services.map((service, index) => {
            return(
                <li className='layered-shadow' key={index}>
                    <div>
                        <p>{service}</p>
                        <button href='/stained-glass-cw/contact'
                           onClick={() => makeRequest(service)}
                           className='service-request-btn layered-shadow' 
                           aria-label='request-service'>
                            <span className='service-request'>
                                &nbsp; Request service &nbsp;
                            </span>
                            <span className='service-request'>
                                &nbsp;
                            </span>
                            <span className="request-btn-mobile">
                                {'\u2709'}
                            </span>
                            <span className="service-request">
                                {'\u260E'}
                            </span>
                            <span className='service-request'>
                                &nbsp;
                            </span>
                        </button>
                    </div>
                </li>
            );
        })
    );
}

export default ServicesList;