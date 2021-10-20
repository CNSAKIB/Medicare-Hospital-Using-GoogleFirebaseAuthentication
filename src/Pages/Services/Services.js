import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices()
    return (
        <div id="services">
            <h1 className="mt-4 mb-2 fw-bold">Our Services</h1>
            <Row xs={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">

                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}

            </Row>

        </div>
    );
};

export default Services;