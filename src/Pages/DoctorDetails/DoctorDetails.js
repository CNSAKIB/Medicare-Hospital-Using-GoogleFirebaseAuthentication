import React from 'react';
import { useParams } from 'react-router';
import useDoctors from '../hooks/useDoctors';

const DoctorDetails = () => {
    const { docId } = useParams();
    const [doctors] = useDoctors()
    const details = doctors?.find(doctor => doctor.id == docId);
    return (
        <div className="mt-5">
            <img className="w-25" src={details?.img} alt="" />
            <h1>{details?.name}</h1>
            <div className="w-75 mx-auto p-4">
                <p className="text-danger">{details?.degree}</p>
                <h4>{details?.specialist}</h4>
                <h5>Available Days: <span className="text-success fw-bold">{details?.date}</span></h5>
                <h4>Call <span className="text-success fw-bold">{details?.number}</span> for your Appoinment.</h4>
            </div>
        </div>
    );
};

export default DoctorDetails;