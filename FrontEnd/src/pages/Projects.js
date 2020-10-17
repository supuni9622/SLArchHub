import React, { Component } from 'react'
//import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MainProject from '../components/Projects/MainProjects';

import '../css/page_header_&_footer.css';
import '../css/projects.css';
//<NavBar></NavBar>

class Projects extends Component {
    render() {
        return (
            <>
                <MainProject></MainProject>
               <Footer></Footer>   
            </>
        )
    }
}

export default Projects
