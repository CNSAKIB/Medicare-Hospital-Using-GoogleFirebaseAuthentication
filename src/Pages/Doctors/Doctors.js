import React from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../hooks/useDoctors';
import './Doctors.css'

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div id="doctors" className="mt-4">
            <h1 className="mt-4 mb-2 fw-bold">Specialist Doctors</h1>
            <Row xs={1} md={3} className="comp-container w-75 mx-auto mt-2 mb-4 ps-md-4 pb-4 g-4">

                {doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)}

            </Row>
        </div>
    );
};

export default Doctors;