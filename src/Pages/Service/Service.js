import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, details } = props.service
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-container" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="fw-bold" >{name}</Card.Title>
                    <Card.Text>
                        {details}
                        <br />
                        <Link to={`/details/${id}`}> <Button className="mt-4 common-button">Details</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default Service;