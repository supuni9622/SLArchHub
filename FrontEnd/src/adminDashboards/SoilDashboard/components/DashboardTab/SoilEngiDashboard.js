import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { styled } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
//import StarsIcon from '@material-ui/icons/Stars';
import AssessmentIcon from '@material-ui/icons/Assessment';
import RoomIcon from '@material-ui/icons/Room';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import DashboardAvatar from '../../../Common/utils/DashboardAvatar';
import DashboardFooter from './DashboardFooter';
import DashboardRightSide from '../../../Common/utils/DBHeaderRightSide'; 

import DashboardTab from './DashboardTab';

const MyAppBar = styled(AppBar)({
    background:'black',
    borderbottom: '1px solid #393d46',
    borderRadius: 3,
    color: '#797979',
    paddingBottom: '2px'
    
  });

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }
  

  const MyListItemIcon = styled(ListItemIcon)({
      color: '#797979',
      '&:hover': {
        background: "#4ecdc4",
        color: 'white',
     },
  });

  const MyListItemLink = styled(ListItemLink) ({
    color: '#797979',
    '&:hover': {
      background: "#4ecdc4",
      color: 'white',
    },
  });

  const MyChevronRightIcon = styled(ChevronRightIcon)({
      color: '#797979'
  });
  const MyChevronLeftIcon = styled(ChevronLeftIcon)({
    color: '#797979'
});

const drawerWidth = 230;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      backgroundColor: 'black',
      color: '#797979',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor: 'black',
      color: '#797979',
      paddingTop: '12px',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: '#eeeeee',
    },
  }),
);

function SoilEngiDashboard() {

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
    <React.Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar
        position="fixed"
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <DashboardRightSide></DashboardRightSide>
        </Toolbar>
      </MyAppBar>
      <Router>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <MyChevronRightIcon /> : <MyChevronLeftIcon />}
          </IconButton>
        </div>
        <DashboardAvatar></DashboardAvatar>
        <Divider />

        <>
        <List component="nav">
          <MyListItemLink href="/soilEngi-dashboard">
            <MyListItemIcon>
              <DashboardIcon/>
            </MyListItemIcon>
            <ListItemText primary="Dashboard" />
          </MyListItemLink>

          <MyListItemLink href="/soilEngi-dashboard/profile">
            <MyListItemIcon>
              <AccountCircleIcon/>
            </MyListItemIcon>
            <ListItemText primary="Profile" />
          </MyListItemLink>

          <MyListItemLink href="/soilEngi-dashboard/invite">
            <MyListItemIcon>
                <PeopleIcon/>
            </MyListItemIcon>
            <ListItemText primary="Invite People" />
          </MyListItemLink>

          <MyListItemLink href="/soilEngi-dashboard/chats">
            <MyListItemIcon>
              <ChatIcon/>
            </MyListItemIcon>
            <ListItemText primary="Chats" />
          </MyListItemLink>

          <MyListItemLink href="/soilEngi-dashboard/invoice">
            <MyListItemIcon>
              <MonetizationOnIcon/>
            </MyListItemIcon>
            <ListItemText primary="Invoice" />
          </MyListItemLink> 

          <MyListItemLink href="/soilEngi-dashboard/map">
            <MyListItemIcon>
              <RoomIcon/>
            </MyListItemIcon>
            <ListItemText primary="Map" />
          </MyListItemLink> 
     
      </List>
              </>
      </Drawer>


      <main className={classes.content}>
        <div className={classes.toolbar} />
      
         <Switch>
          <Route exact path='/soilEngi-dashboard' component={DashboardTab} />
         {/*} <Route path="/soilEngi-dashboard/projects" component={ArchiProjects} />*/}
          
         {/*} <Route path="/soilEngi-dashboard/profile" component={Profile} />*/}
        {/*} <Route path="/soilEngi-dashboard/profile" component={DashProfile} />
          <Route path="/soilEngi-dashboard/work-schedule" component={WorkSchedule} /> */}
        {/*}  <Route path="/soilEngi-dashboard/invite" component={ExteriorDesigner} /> */}
         {/*} <Route path="/soilEngi-dashboard/chats" component={Chat} />*/}
         {/*} <Route path='/soilEngi-dashboard/reports' component={ArchiDashboard}/>
          <Route path='/soilEngi-dashboard/invoice' component={ArchiDashboard}/>*/}
        </Switch>
           </main>
        </Router>
       
    </div>
    <DashboardFooter></DashboardFooter>
    </React.Fragment>
  );
}

export default SoilEngiDashboard