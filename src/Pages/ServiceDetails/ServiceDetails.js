import React from 'react';
import { useParams } from 'react-router';
import useServices from '../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useServices()
    const details = services?.find(service => service.id == serviceId);
    // console.log(details?.name);


    return (
        <div>
            <img className="w-25 mt-4" src={details?.img} alt="" />
            <h1>{details?.name}</h1>
            <p className="w-75 mx-auto text-white bg-secondary p-4">{details?.moreDetials}</p>
        </div>

    );
};

export default ServiceDetails;