import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios';
import { useSelector } from 'react-redux';

function UserProfile() {
    const user = useSelector(state => state.user)

    const [User, setUser] = useState([])
    let variable = { _id: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post("http://localhost:5000/profile/my", variable)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.user)
                setUser(response.data.user)
            } else {
                alert('Failed to get User details')
            }
        })
    },[])

    const userData = User.map((user, index) => {
        return <div key={index} className="container" style={{padding:"30px", boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', marginBottom:"60px"}}>
            <div className="row">
                <div className="col-md-7 col-s-12">
                    <div style={{width:"500px", height:"150px"}}>
                        <img src={user.cover_photo} style={{width:"600px", height:"300px"}}/>
                    </div>
                    <div style={{marginTop:'40px', marginLeft:"100px"}}>
                        <img src={`http://localhost:5000/${user.profile_photo}`} className="rounded-circle" width={160}  style={{border: '2px solid silver',  boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5)'}}/>
                    </div>
                </div>
                <div className="col-md-4 " style={{padding:'20px', margin:'10px', justifyContent:'justify'}}>
                    <h5 style={{fontWeight:'bold'}}>Bio</h5>
                    <p>{user.about}</p>
                </div>
            </div>
            
            <div style={{padding:"20px"}}>
                <h3 style={{fontWeight:'bold'}}>{user.firstName} {user.lastName}</h3>
            </div>
            <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                <div className="col-md-6 col-s-12">
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Email Address: </h6>
                        </div>
                        <div className="col-6">
                            <h6>{user.email} </h6>
                        </div>
                    </div>   
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Contact Number: </h6>
                        </div>
                        <div className="col-6">
                            <h6>{user.contactNumber} </h6>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}>Address: </h6>
                        </div>
                        <div className="col-6">
                            <h6>{user.address} </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-s-12">
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}> Payment Rate: </h6>
                        </div>
                        <div className="col-6">
                            <h6> {user.payRate} % </h6>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-6">
                            <h6 style={{fontWeight:'bold'}}> Rs per Square Feet: </h6>
                        </div>
                        <div className="col-6">
                            <h6>Rs. {user.squareRate} </h6>
                        </div>
                    </div>
                </div>
            </div>
            
            <Link id="edit" className="edit-link" to={"/archi-dashboard/edit-my/" + user._id} style={{color:'blue', padding:'20px', margin:"10px"}}>
                <i style={{fontSize: '1rem', paddingRight:'2px', marginRight:'0px'}} className="fas fa-edit"></i>   Update
            </Link> 
            <div className="row" style={{marginTop:'20px', padding:'10px'}}>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}><i className="fas fa-trophy" /> Skills</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>{user.skill_1}</ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>{user.skill_2}</ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>{user.skill_3}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-medal"></i> Achievements</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>{user.honor_1}</ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>{user.honor_2}</ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>{user.honor_3}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}><i className="fas fa-handshake" /> Services</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>{user.service_1}</ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>{user.service_2}</ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>{user.service_3}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div> 
            <Card style={{marginTop:'20px', padding:'5px'}}>
                <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-user-graduate"></i> Education Qualifications</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{color:'black'}}>{user.education_1}</ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>{user.education_2}</ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>{user.education_3}</ListGroup.Item>
                </ListGroup>  
            </Card> 
            <Card style={{marginTop:'20px', padding:'5px'}}>
                <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-house-user"></i> Work Experience</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{color:'black'}}>{user.experience_1}</ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>{user.experience_2}</ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>{user.experience_3}</ListGroup.Item>
                </ListGroup>  
            </Card> 
            <Card style={{marginTop:'20px', padding:'5px'}}>
                <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-users"></i> Organizations</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{color:'black'}}>{user.organization_1}</ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>{user.organization_2}</ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>{user.organization_3}</ListGroup.Item>
                </ListGroup>  
            </Card> 
        </div>
    })

    return(
            <>
                {userData}  
            </>
        )
    
}

export default UserProfile