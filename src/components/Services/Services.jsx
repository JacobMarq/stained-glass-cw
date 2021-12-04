import './Services.css';
import React from 'react';
import ServicesList from './ServicesList/ServicesList';

export default class Services extends React.Component {
    render() {
        return (
            <div className='service-container unselectable'>
                <ul className='service-list'>
                    <h1 className='service-title'>All Custom Work</h1>
                    <ServicesList request={this.props.request}/>
                </ul>
            </div>
        );
    }
}