import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import '../css/logReg.css';
import axios from 'axios';

function emailValidate(email){
  const emailErrors = [];

  if(email.length === 0){
    emailErrors.push("Email field is required!!")
  }
  if(email.split("").filter(x => x === "@").length !== 1){
    emailErrors.push("Email should contain a@");
  }
  if (email.indexOf(".") === -1) {
    emailErrors.push("Email should contain at least one dot");
  }

  return emailErrors;
}

function passwordValidate(password, confirmPassword){
  const passwordErrors = [];

  if(password.length === 0 || confirmPassword.length === 0){
    passwordErrors.push("Both password fields are required!!!");
  }
  if(password.length < 8 || confirmPassword.length < 8){
    passwordErrors.push("Password should be at least 8 characters long!!");
  }
  if(!(password === confirmPassword)){
    passwordErrors.push("The two password fields should be same!!!");
  }

  return passwordErrors;
}


class RegisterForm extends Component {
  constructor(){
      super()
      this.state ={
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        userType: '',
        address: '',
        province: '',
       // username: '',
        password: '',
        confirmPassword:'',
        emailErrors: [],
        passwordErrors: []

      }
    
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeUserType = this.onChangeUserType.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangeProvince = this.onChangeProvince.bind(this);
     //this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
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

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeUserType(e) {
    this.setState({userType: e.target.value})
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

  onChangeProvince(e) {
    this.setState({province: e.target.value})
  }
 /* onChangeUserName(e) {
    this.setState({username: e.target.value})
  } */

  onChangePassword(e) {
    this.setState({password: e.target.value})
  }

 onChangeConfirmPassword(e) {
    this.setState({confirmPassword: e.target.value})
  }

  onSubmit(e){
      e.preventDefault()

      const { email, password , confirmPassword} = this.state;

      const emailErrors = emailValidate(email);
      if (emailErrors.length > 0) {
      this.setState({ emailErrors });
      return;
    }

    const passwordErrors = passwordValidate(password,confirmPassword);
      if (passwordErrors.length > 0) {
      this.setState({ passwordErrors });
      return;
    }

      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        contactNumber: this.state.contactNumber,
        email: this.state.email,
        userType: this.state.userType,
        address: this.state.address,
        province: this.state.province,
        //username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      }

      
      axios.post('http://localhost:5000/users/add-user', user)
      .then(res => console.log(res.data));

      this.setState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        userType: '',
        address: '',
        province: '',
        password: '',
        confirmPassword: ''

      })
    }
          
  render(){ 
    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;

    const { emailErrors } = this.state;
    const { passwordErrors } = this.state;

  return (
    <body id='regLog'>
      <div className="container sign-in-container">
          <form noValidate onSubmit={this.onSubmit}>
              <h2>SIGN UP</h2>
              <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"  value={this.state.firstName} onChange={this.onChangeFirstName} validate="required"/>
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
                              <div>
                              {emailErrors.map(emailError => (
                                  <p className="errorRegister" key={emailError}>Error: {emailError}</p>
                              ))}
                              </div>
                       </Form.Group> 
                    </div>
                    </div>
                    
                   <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={this.state.address} onChange={this.onChangeAddress}/>
                    </Form.Group> 
                    
                    <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="province">
                        <Form.Label>
                            Province
                        </Form.Label>
                            <Form.Control as="select" value={this.state.province} onChange={this.onChangeProvince}>
                                <option value="null">Select Province</option>
                                <option value="westurn">Westurn Province</option>
                                <option value="southern">Southern Province</option>
                                <option value="nothern">Nothern Province</option>
                                <option value="central">Central Province</option>
                                <option value="sabaragamu">Sabaragamu Province</option>
                                <option value="north-cental">North- Central Province</option>
                                <option value="eastern">Eastern Province</option>
                                <option value="uwa">Uwa Province</option>
                                <option value="north-westurn">North- Westurn Province</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                    <Form.Group controlId="occupation">
                        <Form.Label>
                            User Type
                        </Form.Label>
                            <Form.Control as="select" value={this.state.userType} onChange={this.onChangeUserType}>
                                <option value="null">Select UserType</option>
                                <option value="Exterior-designer">Exterior Designer</option>
                                <option value="Landscape-designer">Landscape Designer</option>
                                <option value="Interior-designer">Interior Designer</option>
                                <option value="Construction-company">Construction Company</option>
                                <option value="Soil-engineer">Soil Engineer</option>
                                <option value="Client">Client</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    </div>
          
                    <div className="row">
                    <div className="col-6">
                       <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={this.onChangePassword}/>
                       </Form.Group> 
                    </div>
                    <div className="col-6">
                       <Form.Group controlId="confirmPassword">
                            <Form.Label> Confirm Password</Form.Label>
                            <Form.Control type="password" value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword}/>
                       </Form.Group> 
                        </div>
                    </div>
                    <div>
                    {passwordErrors.map(passwordError => (
                                  <p className="errorRegister" key={passwordError}>Error: {passwordError}</p>
                        ))}
                    </div>
                    <Button disabled={!isEnabled} variant="primary" size="md" block="block" type="submit" id="btn-signup">
                        Sign Up
                    </Button>
          </form>   
      </div>
    </body>
  )
  }
}

export default RegisterForm; 





