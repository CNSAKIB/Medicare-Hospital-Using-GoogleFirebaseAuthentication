import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    AOS.init();
    return (
        <div data-aos="fade-up" className="footer-container mt-5">
            <Container fluid>
                <Row className="mt-5 text-white ms-5">
                    <Col xs={12} md={6} className="mt-5">
                        <h4>Social Media:</h4>
                        <div className="footer-icons">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                            <p className="mt-3" >Contact Us: <br />
                                Mobile: 01934567891 <br />
                                Tel- 9978-7234 <br />
                                <span className="text-danger fw-bold">Emergency:345</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <h4>Adress:</h4>
                        <p>39/C, Malibagh,Dhaka,Bangladesh</p> <br />
                        <p>For Appoinment: 92173298</p>
                        <p>Email:medicare@hospital.com</p>
                    </Col>
                    <p className="text-white text-center mt-5 pt-5">
                        &copy; All rights reserved by: Chowdhury Nazmuz Sakib
                    </p>
                </Row>

            </Container>

        </div>
    );
};

export default Footer;