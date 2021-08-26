import React from 'react';
import './Businessinfo.css';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor, sit amet',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn,NY 10036, United States',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+000 1230456789',
        icon: faPhoneAlt,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center section-padding">
            <div className="row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;