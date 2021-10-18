import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FAQ from '../FAQs/FAQ';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <FAQ></FAQ>
            <Footer></Footer>
        </>
    );
};

export default Home;