import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import ProfileCover from '../components/Profile/ProfileCover';
import ProfileBody from '../components/Profile/ProfileBody';
import Footer from '../components/Footer';

import '../css/page_header_&_footer.css';
import '../adminDashboards/ArchiDashboard/css/profile.css'

class Profile extends Component {
    render() {
        return (
            <>
                <NavBar></NavBar>
                <ProfileCover></ProfileCover>
                <ProfileBody></ProfileBody>
                <Footer></Footer>   
            </>
        )
    }
}

export default Profile
