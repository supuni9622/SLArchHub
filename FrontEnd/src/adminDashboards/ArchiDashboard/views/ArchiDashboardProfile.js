import React from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainContent from '../components/ProfileTab/MainContent';
//import AddIntro from "../components/ProfileTab/AddIntro";
//import CreateProjects from "../components/ProjectsTab/CreateProjects";
//import EditProjects from "../components/ProjectsTab/EditProjects";
//import ProjectList from "../components/ProjectsTab/ProjectList";

import Skills from '../components/ProfileTab/Skills';
import Honors from '../components/ProfileTab/Honors';
import Organizations from '../components/ProfileTab/Organizations';
import Education from '../components/ProfileTab/Education';
import Experience from '../components/ProfileTab/Experience';

import '../css/profile.css'; 

function ArchiDashboardProfile() {
    return (
      
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-md-9">
                        <MainContent></MainContent>
                        <Education></Education>
                        <Experience></Experience>
                    </div>
                    <div className="col-sm-2 col-md-3 mb-4" id="profile_other">
                        <Skills></Skills>
                        <Honors></Honors>
                        <Organizations></Organizations>
                     </div>
                </div>
            </div>      
            
    )
}

export default ArchiDashboardProfile
