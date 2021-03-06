import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/Services/COVID-19 Vaccine.jpg'
import banner2 from '../../image/Services/Wecare.jpg'
import banner3 from '../../image/Services/Dental.jpg'
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    AOS.init();
    return (
        <div data-aos="fade-down">
            <Carousel className=" w-75 mx-auto mt-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;