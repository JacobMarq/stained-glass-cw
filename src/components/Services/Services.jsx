import './Services.css';
import React from 'react';
import ServicesList from './ServicesList/ServicesList';

export default class Services extends React.Component {
    render() {
        return (
            <div className='service-container unselectable'>
                <ServicesList request={this.props.request}/>
            </div>
        );
    }
}