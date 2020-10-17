import React, { Component } from 'react';

import ChatBotIcon from '../components/Home/ChatBotIcon';
import PhotoSlider from '../components/Home/PhotoSlider';
import AboutUs from '../components/Home/AboutUs';
import SectionCounter from '../components/Home/SectionCounter';
import WorkFlow from '../components/Home/WorkFlow';
import Service from '../components/Home/Service';
import ServiceSection from '../components/Home/ServiceSection';
import Testimonial from '../components/Home/Testimonial';
import Contact from '../components/Home/Contact';

import '../css/index.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function Home() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <ChatBotIcon></ChatBotIcon>
                <PhotoSlider></PhotoSlider>
                <AboutUs></AboutUs>
                <SectionCounter></SectionCounter>
                <WorkFlow></WorkFlow>
                <Service></Service>
                <ServiceSection></ServiceSection>
                <Testimonial></Testimonial>
                <Contact></Contact>  
                <Footer></Footer>
            </React.Fragment>
        )
    }

export default Home


