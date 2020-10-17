import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function DashboardAvatar(){

  const user = useSelector(state => state.user)

  const [User, setUser] = useState([])
  let variable = { _id: localStorage.getItem('userId') }

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
       <p className="centered">
             <a href="archi_profile.html" target=" ">
               <img src={`http://localhost:5000/${user.profile_photo}`} className="rounded-circle" width={72} style={{ border:'1px solid silver', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5)'}}/>
            </a>
           </p>
          <h6 className="centered" style={{color: 'white'}}> {user.firstName}</h6> 
    </div>
  })
    return (
       <>
          {avatarData}
       </>
    )

}

export default DashboardAvatar

