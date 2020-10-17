import React from 'react'

function DashboardAvatar(){

  const firstName = localStorage.getItem('firstName');
  const profile_photo = localStorage.getItem('profile_photo');

    return (
        <div>
            <p className="centered">
             <a href="archi_profile.html" target=" ">
               <img src={profile_photo} className="rounded-circle" width={72} />
            </a>
           </p>
          <h6 className="centered" style={{color: 'white'}}> {firstName}</h6> 
        </div>
    )

}

export default DashboardAvatar

