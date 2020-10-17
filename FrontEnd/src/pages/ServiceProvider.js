import React, { Component } from 'react'
import Footer from '../components/Footer';
import ServiceProviderCard from '../components/ServiceProvider/ServiceProviderCard';
import NavBar from '../components/NavBar';
import SubNavBar from '../components/ServiceProvider/SubNavBar';

import '../css/projects.css';
import '../css/architects.css';
import '../css/page_header_&_footer.css';

import ExteriorDesignerCard from '../components/ServiceProvider/ExteriorDesignerCard';

//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class ServiceProvider extends Component {
    render() {
        return (
            <>
                <NavBar></NavBar>
            <ServiceProviderCard></ServiceProviderCard>
               <Footer></Footer>   
            </>
        )
    }
}

export default ServiceProvider
