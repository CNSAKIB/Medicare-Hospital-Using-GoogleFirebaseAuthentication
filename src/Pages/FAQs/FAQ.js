import React from 'react';
import { Accordion } from 'react-bootstrap';
import faq from '../../image/faq.jpg'
import './FAQ.css'

const FAQ = () => {
    return (
        <div className="w-75 mx-auto mt-4">
            <div className="row">
                <div className="col-6">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Why us?<i className="ms-3 fas fa-hand-holding-medical"></i></Accordion.Header>
                            <Accordion.Body>
                                We provide you the <span className="text-danger">Best Medical Facility</span> in the town.We not only have specialist doctors from this country but also from diffrent parts of the world.We also provide you <span className="text-danger">the best service with low cost</span>.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>24/7 Ambulance <i className="ms-3 fas fa-ambulance"></i></Accordion.Header>
                            <Accordion.Body>
                                We also known for the <span className="text-danger">The Fastest Ambulance Service</span> in town.We have Diffrent type of amblance for example-AC,with Life support,the 999 service etc.Which will ensure the better quality service whenever you need. We are just one call Away.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Emergency Response Team <i class="ms-3 fas fa-first-aid"></i></Accordion.Header>
                            <Accordion.Body>
                                We have a special Team.Which is called the <span className="text-danger" >Emergency Response Team</span> This team has an Emergency number <span className="text-danger fw-bold" >345</span>,by calling this number you can immediately get Medical Treatment anywhere and any time in this country.This emergency response team ensures you the best treatment anywhere and anytime.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>COVID-19 Support<i className="ms-3 fas fa-syringe"></i></Accordion.Header>
                            <Accordion.Body>
                                In this Pandemic situation,It's hard people to out and test COVID.We are providing Home-Test facility ,where <span className="text-danger">you can teste your COVID at home!</span> Our specialist will goto your house and take your sample and will give you the result bt SMS.Also, We are providing the <span className="text-success fw-bold">COVID-19 VACCINATION Campaign.</span> So, you also can get vaccinated by paying a visit to our Hospital
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-6">
                    <img className="w-100 ms-5" src={faq} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;