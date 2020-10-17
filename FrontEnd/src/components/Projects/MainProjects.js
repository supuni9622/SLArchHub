import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import BreadCrumb from './BreadCrumb';
import HomeSideExpansion from './HomeSideExpansion';
//import ButtonsGroup from './ButtonsGroup';
import MainContent from './MainContent'
import ExteriorDesignProjects from './ExteriorDesignProjects';
import InteriorProjects from './InteriorProjects';
import LandscapeProjects from './LandscapeProjects';
import SustainableProjects from './SustainableProjects';

import DetailedProjectPage from '../SingleProjectDetails/DetailedProjectPage';

const drawerWidth = 240;

const MyAppBar = styled(AppBar)({
    background:'rgb(1, 9, 26)',
    borderbottom: '1px solid #393d46',
    borderRadius: 3,
    //color: '#797979',
    //paddingBottom: '2px',
    
  });

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
       
      <CssBaseline />
      <MyAppBar
        margingTop='200px'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
         
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        
         {/*} <div className="d-flex flex-row">
            <BreadCrumb></BreadCrumb>
            <p>20 items</p>   
            </div>  
            
           <div className="d-flex justify-content-end align-items-start collapse navbar-collapse mt-sm-10" > 
              <ButtonsGroup></ButtonsGroup>
              </div> */}
             <ul className="nav justify-content-end">
                    <li className="nav-item">
                       <a className="nav-link" href="/">
                       <img
                          className="w-100"
                          id="SLArchHubLogo"
                          src="Logo/SLArchHubLogo2.png"
                          alt="SLArchHub Logo"
                        />
                       </a>
                    </li>
                <div className="d-none d-md-flex flex-row align-items-center" id="top-nav-links">
                <li className="nav-item">
                        <a className="nav-link" href="/projects">All Projects</a>
                    </li>
                  <li className="nav-item">
                        <a className="nav-link" href="/projects/exterior-design">Exterior Design</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects/interior-design">Interior Design</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects/landscape-design">Landscape Design</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/projects/sustainable-design">Sustainable Design</a>
                    </li>
                </div>
              </ul>

      </Toolbar>

      </MyAppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
            <HomeSideExpansion></HomeSideExpansion>   
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Router>
          <Switch>
            <Route exact path='/projects' component={MainContent} />
            <Route exact path="/projects/exterior-design" component={ExteriorDesignProjects} />
            <Route path="/projects/exterior-design/:projectId" component={DetailedProjectPage} /> 
            <Route path="/projects/interior-design" component={InteriorProjects} />
            <Route path="/projects/landscape-design" component={LandscapeProjects} />
            <Route path="/projects/sustainable-design" component={SustainableProjects} />
        </Switch>
        </Router>
      </main>
    </div>
  );
}
