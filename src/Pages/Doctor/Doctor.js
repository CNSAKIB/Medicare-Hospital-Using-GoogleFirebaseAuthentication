import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Doctor = (props) => {
    AOS.init();
    const { id, name, degree, img, specialist, date } = props.doctor;
    return (
        <div>
            <Col>
                <Card data-aos="flip-left" className="single-card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="img-container " src={img} />
                    <Card.Body className="text-center">
                        <Card.Title className="fw-bold" >{name}</Card.Title>
                        <Card.Text>
                            <span className="text-danger" >{degree}</span> <br />
                            <p>{specialist}</p> <br />
                            <p>Days Available: <span className="text-success"> {date}</span> </p>
                            <br />
                            <Link to={`/docDetails/${id}`}> <Button className="mt-4 common-button">Appoinment</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
        </div>
    );
};

export default Doctor;