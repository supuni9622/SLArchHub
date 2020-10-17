import React from 'react'
import axios from 'axios';
import { USER_SERVER } from '../../../components/Config';
import { withRouter } from 'react-router-dom';
import { useSelector} from "react-redux";


function DBHeaderRightSide(props) {
  const user = useSelector(state => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  const firstName = localStorage.getItem('firstName');
  
  return(
    <>
         <a className="nav-link" href="/">
            <img
              className="w-100"
              id="SLArchHubLogo"
              src="Logo/SLArchHubLogo2.png"
              alt="SLArhHub Logo"
            />
         </a>
        <h6 style={{color:'white', paddingTop:'20px', paddingLeft:'20px', paddingRight:'20px'}}>Hello {firstName}, Welcome to SLArchHub</h6>
        <button className="btn btn-info my-2 my-sm-0 mx-5"> <a onClick={logoutHandler}>Logout</a></button> 
    </>
  )
}


export default withRouter(DBHeaderRightSide);
