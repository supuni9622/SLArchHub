import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import ProfilePhotoUpload from '../../../Common/utils/ProfilePhotoUpload';
//import CoverPhotoUpload from '../../utils/CoverPhotoUpload';

import axios from 'axios';
import { Link } from 'react-router-dom';

class EditUserProfile extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCoverPhoto = this.onChangeCoverPhoto.bind(this);
        this.onChangePayRate = this.onChangePayRate.bind(this);
        this.onChangeSquareRate = this.onChangeSquareRate.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);

        this.onChangeSkill1 = this.onChangeSkill1.bind(this);
        this.onChangeSkill2 = this.onChangeSkill2.bind(this);
        this.onChangeSkill3 = this.onChangeSkill3.bind(this);

        this.onChangeHonor1 = this.onChangeHonor1.bind(this);
        this.onChangeHonor2 = this.onChangeHonor2.bind(this);
        this.onChangeHonor3 = this.onChangeHonor3.bind(this);

        this.onChangeEducation1 = this.onChangeEducation1.bind(this);
        this.onChangeEducation2 = this.onChangeEducation2.bind(this);
        this.onChangeEducation3 = this.onChangeEducation3.bind(this);

        this.onChangeOrganization1 = this.onChangeOrganization1.bind(this);
        this.onChangeOrganization2 = this.onChangeOrganization2.bind(this);
        this.onChangeOrganization3 = this.onChangeOrganization3.bind(this);

        this.onChangeService1 = this.onChangeService1.bind(this);
        this.onChangeService2 = this.onChangeService2.bind(this);
        this.onChangeService3 = this.onChangeService3.bind(this);

        this.onChangeExperience1 = this.onChangeExperience1.bind(this);
        this.onChangeExperience2 = this.onChangeExperience2.bind(this);
        this.onChangeExperience3 = this.onChangeExperience3.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            contactNumber: '',
            address: '',
            profile_photo: '',
            cover_photo: '',
            payRate: '',
            squareRate: '',
            about: '',
            skill_1: '',
            skill_2: '',
            skill_3: '',
            honor_1: '',
            honor_2: '',
            honor_3: '',
            education_1: '',
            education_2: '',
            education_3: '',
            organization_1: '',
            organization_2: '',
            organization_3: '',
            service_1: '',
            service_2: '',
            service_3: '',
            experience_1: '',
            experience_2: '',
            experience_3: ''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/profile/edit-my/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              contactNumber: res.data.contactNumber,
              address:res.data.address,
              cover_photo: res.data.cover_photo,
              payRate: res.data.payRate,
              squareRate: res.data.squareRate,
              about: res.data.about,
              skill_1: res.data.skill_1,
              skill_2: res.data.skill_2,
              skill_3: res.data.skill_3,
              honor_1: res.data.honor_1,
              honor_2: res.data.honor_2,
              honor_3: res.data.honor_3,
              education_1: res.data.education_1,
              education_2: res.data.education_2,
              education_3: res.data.education_3,
              organization_1: res.data.organization_1,
              organization_2: res.data.organization_2,
              organization_3: res.data.organization_3,
              service_1: res.data.service_1,
              service_2: res.data.service_2,
              service_3: res.data.service_3,
              experience_1: res.data.experience_1,
              experience_2: res.data.experience_2,
              experience_3: res.data.experience_3
            })
        })
          .catch((error) => {
            console.log(error);
          })
        }

        onChangeFirstName(e) {
            this.setState({firstName: e.target.value})
          }
        onChangeLastName(e) {
            this.setState({lastName: e.target.value})
          }
        onChangeContactNumber(e) {
          this.setState({contactNumber: e.target.value})
        }
        onChangeAddress(e) {
          this.setState({address: e.target.value})
        }
        onChangeCoverPhoto(e) {
          this.setState({cover_photo: e.target.value})
        }
        onChangePayRate(e) {
          this.setState({payRate: e.target.value})
        }
        onChangeSquareRate(e) {
          this.setState({squareRate: e.target.value})
        }
        onChangeAbout(e) {
          this.setState({about: e.target.value})
        }
        onChangeSkill1(e) {
          this.setState({skill_1: e.target.value})
        }
        onChangeSkill2(e) {
          this.setState({skill_2: e.target.value})
        }
        onChangeSkill3(e) {
          this.setState({skill_3: e.target.value})
        }
        onChangeHonor1(e) {
          this.setState({honor_1: e.target.value})
        }
        onChangeHonor2(e) {
          this.setState({honor_2: e.target.value})
        }
        onChangeHonor3(e) {
          this.setState({honor_3: e.target.value})
        }
        onChangeEducation1(e) {
          this.setState({education_1: e.target.value})
        }
        onChangeEducation2(e) {
          this.setState({education_2: e.target.value})
        }
        onChangeEducation3(e) {
          this.setState({education_3: e.target.value})
        }
        onChangeOrganization1(e) {
          this.setState({organization_1: e.target.value})
        }
        onChangeOrganization2(e) {
          this.setState({organization_2: e.target.value})
        }
        onChangeOrganization3(e) {
          this.setState({organization_3: e.target.value})
        }
        onChangeService1(e) {
          this.setState({service_1: e.target.value})
        }
        onChangeService2(e) {
          this.setState({service_2: e.target.value})
        }
        onChangeService3(e) {
          this.setState({service_3: e.target.value})
        }
        onChangeExperience1(e) {
          this.setState({experience_1: e.target.value})
        }
        onChangeExperience2(e) {
          this.setState({experience_2: e.target.value})
        }
        onChangeExperience3(e) {
          this.setState({experience_3: e.target.value})
        }

          onSubmit(e) {
              e.preventDefault()

              const userObject = {
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  contactNumber: this.state.contactNumber,
                  address: this.state.address,
                  profile_photo: this.state.profile_photo,
                  cover_photo: this.state.cover_photo,
                  about: this.state.about,
                  payRate: this.state.payRate,
                  squareRate: this.state.squareRate,
                  skill_1: this.state.skill_1,
                  skill_2: this.state.skill_2,
                  skill_3: this.state.skill_3,
                  honor_1: this.state.honor_1,
                  honor_2: this.state.honor_2,
                  honor_3: this.state.honor_3,
                  education_1: this.state.education_1,
                  education_2: this.state.education_2,
                  education_3: this.state.education_3,
                  organization_1: this.state.organization_1,
                  organization_2: this.state.organization_2,
                  organization_3: this.state.organization_3,
                  service_1: this.state.service_1,
                  service_2: this.state.service_2,
                  service_3: this.state.service_3,
                  experience_1: this.state.experience_1,
                  experience_2: this.state.experience_2,
                  experience_3: this.state.experience_3
              }

              axios.put('http://localhost:5000/profile/update-my/' + this.props.match.params.id, userObject)
              .then((res) => {
                console.log(res.data)
                console.log('User details successfully updated')
              }).catch((error) => {
                console.log(error)
              })
          }

          updateFiles = (newProfilePhoto) => {
            this.setState({ profile_photo: newProfilePhoto })
        }
       /* updateCoverFiles = (newCoverPhoto) => {
          this.setState({ cover_photo: newCoverPhoto })
      } */

    render(){
        return(
            <div className="container" style={{padding:"30px", boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', marginBottom:"60px"}}>
                <Form onSubmit={this.onSubmit}>
                  <div className="row" style={{marginBottom:"20px"}}>
                    <div className="col-6" style={{marginLeft:"100px"}}>
                        <h6>Add your profile photo..</h6>
                        <ProfilePhotoUpload refreshFunction={this.updateFiles} />
                    </div>
                   {/*} <div className="col-6">
                    <h6>Add your cover photo..</h6>
                        <CoverPhotoUpload refreshFunction={this.updateCoverFiles} />
                    </div>
                  */}
                   <div className="col-md-4 " style={{padding:'20px', margin:'10px', justifyContent:'justify'}}>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{fontWeight:'bold'}}>Bio</Form.Label>
                        <Form.Control as="textarea" rows="8" value={this.state.about} onChange={this.onChangeAbout}/>
                      </Form.Group>
                    </div>
                  </div>
                  <div>
                    <Form.Group controlId="Name">
                      <Form.Label>Cover Photo URL</Form.Label>
                      <Form.Control type="text" value={this.state.cover_photo} onChange={this.onChangeCoverPhoto}/>
                    </Form.Group>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <Form.Group controlId="Name">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group controlId="Name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeLastName}/>
                     </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <Form.Group controlId="Contact Number">
                          <Form.Label>Contact Number</Form.Label>
                          <Form.Control type="number" value={this.state.contactNumber} onChange={this.onChangeContactNumber}/>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.onChangeAddress}/>
                     </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="payRate">
                            <Form.Label>
                                Payment Rate
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="5-10"
                                        aria-label="area"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.payRate} 
                                        onChange={this.onChangePayRate}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2"> % </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                    <Form.Group controlId="sqrt">
                            <Form.Label>
                                Rs per Square Feet
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="200"
                                        aria-label="budget"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.squareRate} 
                                        onChange={this.onChangeSquareRate}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                    </div>
                  </div>

              <div className="row" style={{marginTop:'20px', padding:'10px'}}>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}>Skills</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.skill_1} onChange={this.onChangeSkill1}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.skill_2} onChange={this.onChangeSkill2}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.skill_3} onChange={this.onChangeSkill3}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}>Achievements</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.honor_1} onChange={this.onChangeHonor1}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.honor_2} onChange={this.onChangeHonor2}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.honor_3} onChange={this.onChangeHonor3}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}>Services</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.service_1} onChange={this.onChangeService1}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.service_2} onChange={this.onChangeService2}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.service_3} onChange={this.onChangeService3}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div> 

            <Card style={{marginTop:'20px', padding:'5px'}}>
                <Card.Header style={{fontWeight:'bold'}}>Education Qualifications</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.education_1} onChange={this.onChangeEducation1}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.education_2} onChange={this.onChangeEducation2}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.education_3} onChange={this.onChangeEducation3}/>
                    </ListGroup.Item>
                </ListGroup>  
            </Card> 

            <Card style={{marginTop:'20px', padding:'5px'}}>
                <Card.Header style={{fontWeight:'bold'}}>Work Experience</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.experience_1} onChange={this.onChangeExperience1}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.experience_2} onChange={this.onChangeExperience2}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.experience_3} onChange={this.onChangeExperience3}/>
                    </ListGroup.Item>
                </ListGroup>  
            </Card> 

            <Card style={{marginTop:'20px', padding:'5px', marginBottom:'20px'}}>
                <Card.Header style={{fontWeight:'bold'}}>Organizations</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.organization_1} onChange={this.onChangeOrganization1}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.organization_2} onChange={this.onChangeOrganization2}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{color:'black'}}>
                        <Form.Control type="text" value={this.state.organization_3} onChange={this.onChangeOrganization3}/>
                    </ListGroup.Item>
                </ListGroup>  
            </Card> 
                 
                 <Button variant="info" size="md" block="block" type="submit">
                     Save Changes
                 </Button>
          </Form>
             
              <Link id="edit" className="edit-link" to={"/archi-dashboard/profile/"} style={{color:"blue"}}>
                Back to Profile
            </Link>
        </div>
        )
    }
}

export default EditUserProfile