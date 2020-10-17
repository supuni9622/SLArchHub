import React,  { useEffect, useState } from 'react'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NavBar from '../NavBar';
import BookAppointment from '../BookAppointment/BookAppointment'
//import Comment from '../Comment/Comment';
import 'antd/dist/antd.css';
import Footer from '../Footer';


function ProfilePage(props) {

    const userId = props.match.params.userId
    const [User, setUser] = useState([])
    //const [CommentLists, setCommentLists] = useState([])

    const userVariable = {
        userId : userId
    }

    useEffect(() => {
        Axios.post('http://localhost:5000/service-provider/getServiceProvider', userVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.user)
                    setUser(response.data.user)
                } else {
                    alert('Failed to get Service Provider Info')
                }
            })
        
          /*  Axios.post('http://localhost:5000/comment/getComments', projectVariable)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data.comments',response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get Comments')
                }
            }) */

    }, [])

    /*
    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    } */

    return (
        <>
        <NavBar/>
        <div className="container" style={{ padding: '30px' , marginTop: '130px',  marginBottom:"60px"}}>
            <div style={{backgroundColor:'white',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', padding:'10px' }}>
                <div className="row">
                    <div className="col-md-7 col-s-12">
                        <div style={{width:"500px", height:"150px"}}>
                            <img src={User.cover_photo} style={{width:"600px", height:"300px"}} />
                        </div>
                        <div style={{marginTop:'40px', marginLeft:"100px"}}>
                            <img src={`http://localhost:5000/${User.profile_photo}`} className="rounded-circle" width={160}  style={{border: '2px solid silver',  boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5)'}}/>
                        </div>
                    </div>
                    <div className="col-md-4 " style={{padding:'20px', margin:'10px', justifyContent:'justify'}}>
                        <h5 style={{fontWeight:'bold'}}>Bio</h5>
                        <p>{User.about}</p>
                    </div>
                </div>
                
                <div style={{padding:"20px"}}>
                    <h3 style={{fontWeight:'bold'}}>{User.firstName} {User.lastName} | {User.userType}</h3>
                </div>
                <div>
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-4">
                            <h6 style={{fontWeight:'bold'}}> Payment Rate: </h6>
                        </div>
                        <div className="col-4">
                            <h6> {User.payRate} % </h6>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft:"20px", paddingBottom: '10px'}}>
                        <div className="col-4">
                            <h6 style={{fontWeight:'bold'}}> Rs per Square Feet: </h6>
                        </div>
                        <div className="col-4">
                            <h6>Rs. {User.squareRate} </h6>
                        </div>
                    </div>
                    <BookAppointment bookingTo={User.userId}/>
                </div>
            </div> 
            
                <div className="row" style={{marginTop:'40px', padding:'10px'}}>
                    <div className="col-8">
                        <Card style={{marginBottom:'40px', marginRight:'15px', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>
                            <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-user-graduate"></i> Education Qualifications</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:'black'}}>{User.education_1}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.education_2}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.education_3}</ListGroup.Item>
                            </ListGroup>  
                        </Card> 
                        <Card style={{marginBottom:'40px', marginRight:'15px',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>
                            <Card.Header style={{fontWeight:'bold'}}> <i class="fas fa-house-user"></i> Work Experience</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:'black'}}>{User.experience_1}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.experience_2}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.experience_3}</ListGroup.Item>
                            </ListGroup>  
                        </Card>
                        <Card style={{marginBottom:'40px', marginRight:'15px', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>
                            <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-users"></i> Organizations</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:'black'}}>{User.organization_1}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.organization_2}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.organization_3}</ListGroup.Item>
                            </ListGroup>  
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ width: '18rem',marginBottom:'40px', float: 'right', boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>
                            <Card.Header style={{fontWeight:'bold'}}><i className="fas fa-trophy" /> Skills</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:'black'}}>{User.skill_1}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.skill_2}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.skill_3}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '18rem' ,marginBottom:'40px', float: 'right',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>
                            <Card.Header style={{fontWeight:'bold'}}><i class="fas fa-medal"></i> Achievements</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:'black'}}>{User.honor_1}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.honor_2}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.honor_3}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '18rem' ,marginBottom:'40px', float: 'right',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)'}}>
                            <Card.Header style={{fontWeight:'bold'}}><i className="fas fa-handshake" /> Services</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:'black'}}>{User.service_1}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.service_2}</ListGroup.Item>
                                <ListGroup.Item style={{color:'black'}}>{User.service_3}</ListGroup.Item>
                            </ListGroup>
                        </Card>  
                </div> 
            </div>
        

    

        {/*Comment Component */}
        {/*<div className="container">
            <Comment CommentLists={CommentLists}  postId={Project._id} refreshFunction={updateComment}/>
    </div> */}
    </div>
    <Footer></Footer>
    </>
    )
}

export default ProfilePage

