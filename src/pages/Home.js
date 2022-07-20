import React, { useState } from 'react';
import '../assets/App.css';
import Mainbanner from '../components/home/Mainbanner';
import Service from '../components/home/Services';
import Offer from '../components/home/offers';
import Info from '../components/home/Infoapp';
import News from '../components/home/News';
import Testimo from '../components/home/Testimonials';
import Partner from '../components/home/Partner';
import Quick from '../components/home/Quicktouch';
import Sitemap from '../components/home/Sitemap';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Navbar';

const Home = () => {


    return (
        <>
            <section class="container-fluid main_cntr">

                <Nav />
                <Mainbanner />
                <Service />
                <Offer />
                <Info />
                <News />
                <Testimo />
                <Partner />
                <Quick />
                <Sitemap />
                <Footer />

            </section>
        </>

    );
}

export default Home;
