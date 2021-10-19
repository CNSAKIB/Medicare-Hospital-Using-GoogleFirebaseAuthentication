import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQs/FAQ';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;