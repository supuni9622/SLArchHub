import React, { Component } from "react";

//import React, { useState, useEffect } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FileUpload from '../Components/ProfileTab/ProfilePhotoUpload';
//import CoverPhotoUpload from '../Components/ProfileTab/CoverPhotoUpload';

/*
const archiDashProfile = () => {

  const userID = localStorage.getItem('userId');

  const [ User, setUser ] = useState();

  const User = {
    userID: userID
  }

  useEffect(() => {
    axios.get("http://localhost:5000/users/edit/"+ userID, User)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.user)
                setUser(response.data.user)
            } else {
                alert('Failed to get video Info')
            }
        })
      })
  return(
    <div>
      <form>
      <input type="text" name="firstName" value={user.firstName}  />
      </form>
    </div>
  )
}


export default archiDashProfile */



class archiDashProfile extends Component{
    constructor(props){
        super(props)
       
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePayRate = this.onChangePayRate.bind(this);
        this.onChangeSquareRate = this.onChangeSquareRate.bind(this);
        this.onChangeCoverPhoto = this.onChangeCoverPhoto.bind(this);
        this.onChangeProfilePhoto = this.onChangeProfilePhoto.bind(this);
        this.onChangeProffesion = this.onChangeProffesion.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state ={
          
          firstName: '',
          lastName: '',
          contactNumber: '',
          email: '',
          address: '',
          payRate: '',
          squareRate: '',
          cover_photo: '',
          profile_photo: '',
          proffesion: '',
          about: ''
        }
    }

      

    //Life Cycle Methods
  componentDidMount() {
    axios.get('http://localhost:5000/users/edit/'+ localStorage.getItem('userId') ).then((res) => {

    if(res.data.success){
      console.log(res.data)
    }
    else{
      console.log("error")
    }
      this.setState({
       
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        contactNumber: res.data.contactNumber,
        email: res.data.email,
        address: res.data.address,
        payRate: res.data.payRate,
        squareRate: res.data.squareRate,
        cover_photo: res.data.cover_photo,
        profile_photo: res.data.profile_photo,
        proffesion: res.data.proffesion,
        about: res.data.about   
      });
    });
}

//Onchange Methods




onChangeFirstName(e) {
    this.setState({firstName: e.target.value})
  }

  onChangeLastName(e) {
    this.setState({lastName: e.target.value})
  }

  onChangeContactNumber(e) {
    this.setState({contactNumber: e.target.value})
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeSquareRate(e) {
    this.setState({squareRate: e.target.value})
  }
  onChangePayRate(e) {
    this.setState({payRate: e.target.value})
  }

  onChangeAddress(e) {
    this.setState({address: e.target.value})
  }

  onChangeCoverPhoto(e) {
    this.setState({cover_photo: e.target.value})
  }

  onChangeProfilePhoto(e) {
    this.setState({profile_photo: e.target.value})
  }

  onChangeProffesion(e) {
    this.setState({proffesion: e.target.value})
  }

  onChangeAbout(e) {
    this.setState({about: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()

    const user = {
     
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      contactNumber: this.state.contactNumber,
      email: this.state.email,
      address: this.state.address,
      payRate: this.state.payRate,
      squareRate: this.state.squareRate,
      cover_photo: this.state.cover_photo,
      profile_photo: this.state.profile_photo,
      proffesion: this.state.proffesion,
      about: this.state.about   
    }

    
    axios.put('http://localhost:5000/users/update'+ this.props.match.params._id, user)
    .then(res => console.log(res.data));

  //Redirect to Login
  //this.props.history.push('/login')
    
  } 
  updateFiles = (newImages) => {
    this.setState({ cover_photo: newImages, profile_photo: newImages }) 
}

  render() {
    const userID = localStorage.getItem('userId');
    const firstName = localStorage.getItem('firstName');
      return(
          <div>

            <div>{userID}</div>
              <Form id="profileForm" onSubmit={this.onSubmit}>
                  <div className="container-fluid">
                 
                      <div className="row">
                          <div className="col-6">
                            <FileUpload refreshFunction={this.updateFiles} />
                          </div>
                          <div className="col-6">
                           {/*} <CoverPhotoUpload refreshFunction={this.updateFiles} /> */}
                          </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeFirstName} validate="required"/>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                       <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeLastName}/>
                       </Form.Group> 
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="contactNumber">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" value={this.state.contactNumber} onChange={this.onChangeContactNumber}/>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                       <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                              name = "email"
                              type="email" 
                              value={this.state.email} 
                              onChange={this.onChangeEmail}
                              />
                       </Form.Group> 
                    </div>
                    </div>
                    
                   <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.onChangeAddress}/>
                    </Form.Group> 
                    <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="payRate">
                            <Form.Label>
                                Payment Rate 
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="7%"
                                        aria-label="payRate"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.payRate} 
                                        onChange={this.onChangePayRate}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                        </div>
                        <div className="col-6">
                        <Form.Group controlId="payRate">
                            <Form.Label>
                                Rs per Square Feet
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="200"
                                        aria-label="payRate"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.squareRate} 
                                        onChange={this.onChangeSquareRate}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">sqft</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                          </div>
                    </div>
                    <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="proffesion">
                        <Form.Label>Proffesion</Form.Label>
                        <Form.Control type="text"  value={this.state.proffesion} onChange={this.onChangeProffesion} />
                    </Form.Group>
                    </div>
                    <div className="col-6">
                       <Form.Group controlId="about">
                            <Form.Label>About</Form.Label>
                            <Form.Control type="text" value={this.state.about} onChange={this.onChangeAbout}/>
                       </Form.Group> 
                    </div>
                    </div>
                <Button variant="primary" size="md" block="block" type="submit">
                 Save Changes
              </Button>
              </Form>
          </div>
      )
  }

}

export default archiDashProfile  