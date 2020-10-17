import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer';

import '../css/page_header_&_footer.css';
import '../css/architects.css';

class DetailedProject extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <ProjectDetails></ProjectDetails>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default DetailedProject
