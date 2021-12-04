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
        navigate('/contact')
    }

    return(
        Services.map((service, index) => {
            return(
                <li className='layered-shadow' key={index}>
                    <div>
                        <p>{service}</p>
                        <button href='/contact'
                           onClick={() => makeRequest(service)}
                           className='service-request-btn layered-shadow' 
                           aria-label='request-service'>
                            <span className='service-request'>
                                &nbsp; Request service 
                            </span>

                            &nbsp; {'\u260E'} &nbsp;
                        </button>
                    </div>
                </li>
            );
        })
    );
}

export default ServicesList;