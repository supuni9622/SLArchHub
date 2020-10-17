import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import { USER_SERVER } from './Config';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch  } from "react-redux";
import { Button } from '@material-ui/core';
import 'antd/dist/antd.css';
import {Avatar} from 'antd';

function RightMenu(props) {
  const user = useSelector(state => state.user);
  var firstName = localStorage.getItem('firstName')
  const [User, setUser] = useState([])
  let variable = { _id: localStorage.getItem('userId') }

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  useEffect(() => {
    axios.post("http://localhost:5000/users/avatar", variable)
    .then(response => {
        if (response.data.success) {
            console.log(response.data.user)
            setUser(response.data.user)
        } else {
            alert('Failed to get User details')
        }
    })
},[])

const avatarData = User.map((user, index) => {
  return <div key={index}>
          <Avatar
              src= {`http://localhost:5000/${user.profile_photo}`}
              style = {{marginRight:'5px'}}
              alt="image"
          />
        </div>
        })


  if (user.userData && !user.userData.isAuth) {
    return (
        <div>
          <button className="btn btn-info my-2 my-sm-0 mx-2" type="login">
            <i className="fas fa-user-circle" /> <a href="/login" >Login</a>
          </button>
             {/* <button className="btn btn-info my-2 my-sm-0 mr-2"  type="signup">
                  <i className="fas fa-user-plus" />  <a href="/users/add-user">Sign up</a>
          `     </button> */}
              </div>
          )
        }
  else {
        if(user.userData && user.userData.userType == 'Client'){
          return (
            <>
              {avatarData}
                <Button>
                  <a href="/client-dashboard/" >
                    {firstName}
                  </a>
                </Button>
                <Button> <a onClick={logoutHandler}>Logout</a></Button> 
              </>      
               )
            }else if(user.userData && user.userData.userType == 'Exterior-designer' || user.userData && user.userData.userType == 'Landscape-designer'){
              return (
                <>
                  {avatarData}
                  <Button>
                    <a href="/archi-dashboard/" >
                      {firstName}
                    </a>
                  </Button>
                  <Button> <a onClick={logoutHandler}>Logout</a></Button> 
                </>      
              )
            }else if(user.userData && user.userData.userType == 'Admin'){
              return(
                <>
                  {avatarData}
                  <Button>
                    <a href="/admin-dashboard/" >
                      {firstName}
                    </a>
                  </Button>
                  <button className="btn btn-info my-2 my-sm-0 mx-5"> <a onClick={logoutHandler}>Logout</a></button> 
                </>
                ) 
              }else if(user.userData && user.userData.userType == 'Interior-designer'){
                  return(
                    <>
                      {avatarData}
                      <Button>
                        <a href="/interior-dashboard/" >
                          {firstName}
                        </a>
                      </Button>
                      <button className="btn btn-info my-2 my-sm-0 mx-5"> <a onClick={logoutHandler}>Logout</a></button> 
                    </>
                  ) 
                }else{
                  return(
                    <>
                      {avatarData}
                      <Button>
                        <a href="/construction-dashboard/" >
                          {firstName}
                        </a>
                      </Button>
                      <button className="btn btn-info my-2 my-sm-0 mx-5"> <a onClick={logoutHandler}>Logout</a></button> 
                    </>
                  ) 
                }   
              }  
        }

export default withRouter(RightMenu);



