import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useSelector } from 'react-redux';

function Admin() {
    const user = useSelector(state => state.user)

    const [Admin, setAdmin] = useState([])
    let variable = { _id: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post("http://localhost:5000/admin-dashboard/admin", variable)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.admin)
                setAdmin(response.data.admin)
            } else {
                alert('Failed to get Admin details')
            }
        })
    },[])

    const adminData = Admin.map((admin, index) => {
        return <div key={index} className="container" style={{padding:"30px", boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', marginBottom:"60px"}}>
            <div style={{width:"300px", height:"100px"}}>
                <img src={admin.cover_photo} />
            </div>
            <div style={{marginTop:'50px', marginLeft:"100px"}}>
                <img src={`http://localhost:5000/${admin.profile_photo}`} className="rounded-circle" width={180}  style={{border: '2px solid silver',  boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5)'}}/>
            </div>
            <div style={{padding:"20px"}}>
                <h3>{admin.firstName} {admin.lastName}</h3>
            </div>
            <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                <div className="col-4">
                    <h6>Email Address: </h6>
                </div>
                <div className="col-4">
                    <h6>{admin.email} </h6>
                </div>
            </div>
            <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                <div className="col-4">
                    <h6>Contact Number: </h6>
                </div>
                <div className="col-4">
                    <h6>{admin.contactNumber} </h6>
                </div>
            </div>
            <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                <div className="col-4">
                    <h6>Address: </h6>
                </div>
                <div className="col-4">
                    <h6>{admin.address} </h6>
                </div>
            </div>
            
            <Link id="edit" className="edit-link" to={"/admin-dashboard/edit-admin/" + admin._id} style={{color:'blue', padding:'20px', margin:"10px"}}>
                <i style={{fontSize: '1rem', paddingRight:'2px', marginRight:'0px'}} className="fas fa-edit"></i>   Update
            </Link>   
        </div>
    })

    return(
            <>
                {adminData}  
            </>
        )
    
}

export default Admin