import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Auth from "./hoc/auth";

import Home from './pages/Home';
import LoginRegisterForm from './pages/LoginReagisterForm';

import ExteriorDesignProjects from './components/Projects/ExteriorDesignProjects';
import ExtiProjects from './components/Projects/ExtiProjects';
import InteriorDesignProjects from './components/Projects/InteriorProjects';
import LandscapeDesignProjects from './components/Projects/LandscapeProjects';
import SustainableDesignProjects from './components/Projects/SustainableProjects';
import DetailedProjectPage from './components/SingleProjectDetails/DetailedProjectPage';

import ExteriorDesigner from './pages/ExteriorDesigner';
import InteriorDesigner from './pages/InteriorDesigner';
import LandscapeDesigner from './pages/LandscapeDesigner';
import ConstructionCompany from './pages/ConstructionCompany';
import ProfilePage from './components/ServiceProviderProfile/ProfilePage'

import ArchiDashboard from './adminDashboards/ArchiDashboard/views/ArchiDashboard';
import MiniDrawer from './adminDashboards/ClientDashboard/views/ClientDashboard';
import AdminDashboard from './adminDashboards/AdminDashboard/components/Dashboard/AdminDashboard';
import ConstructionDashboard from './adminDashboards/ConstructionDashboard/components/DashboardTab/ConstructionDashboard';
import InteriorDashboard from './adminDashboards/IntiDashboard/components/DashboardTab/InteriorDashboard';
import SoilEngiDashboard from './adminDashboards/SoilDashboard/components/DashboardTab/SoilEngiDashboard';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (      

   <Router>
    <Switch>
          <Route exact path='/' component={Auth(Home, null)} />
          <Route exact path="/login" component={Auth(LoginRegisterForm, false)} />

          <Route exact path="/projects" component={Auth(ExteriorDesignProjects, null)} />
          <Route exact path="/exterior-design-projects" component={Auth(ExtiProjects, null)} />
          <Route exact path="/interior-design-projects" component={Auth(InteriorDesignProjects, null)} />
          <Route exact path="/landscape-design-projects" component={Auth(LandscapeDesignProjects, null)} />
          <Route exact path="/sustainable-projects" component={Auth(SustainableDesignProjects, null)} />
          <Route exact path="/projects/:projectId" component={Auth(DetailedProjectPage, null)} />
          
          <Route exact path="/interior-designers" component={Auth(InteriorDesigner, null)} />
          <Route exact path="/exterior-designers" component={Auth(ExteriorDesigner,null)} />
          <Route exact path="/landscape-designers" component={Auth(LandscapeDesigner,null)} />
          <Route exact path="/construction-companies" component={Auth(ConstructionCompany,null)} />
          <Route exact path="/service-providers/:userId" component={Auth(ProfilePage, null)} />
         
          <Route path='/archi-dashboard/' component={Auth(ArchiDashboard, true)}/>
          <Route path="/client-dashboard" component={Auth(MiniDrawer, true)}/>
          <Route path="/admin-dashboard" component={Auth(AdminDashboard, true)}/>
          <Route path="/construction-dashboard" component={Auth(ConstructionDashboard, true)}/>
          <Route path="/soilEngi-dashboard" component={Auth(SoilEngiDashboard, true)}/>
          <Route path="/interior-dashboard" component={Auth(InteriorDashboard, true)}/>
    </Switch>
  </Router>  
 )    
}

export default App;
