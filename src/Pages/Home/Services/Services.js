import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://aqueous-thicket-94190.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Best Offer Available</h2>
            <br /><br />
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;