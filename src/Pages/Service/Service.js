import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, img, details } = props.service
    return (
        <Col>
            <Card className="card-container" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-container" src={img} />
                <Card.Body className="text-center">
                    <Card.Title>Course Title: {name}</Card.Title>
                    <Card.Text>
                        {details}
                        <br />
                        <Button className="mt-4">Details</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;