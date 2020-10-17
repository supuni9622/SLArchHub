import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import '../../css/archiProjects.css';
import axios from 'axios';

class AddIntroForm extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeCoverPhoto = this.onChangeCoverPhoto.bind(this);
        this.onChangeProfilePhoto = this.onChangeProfilePhoto.bind(this);
        this.onChangeProffessions = this.onChangeProffessions.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangePaymentRate = this.onChangePaymentRate.bind(this);
        this.onChangeRsPerSquare = this.onChangeRsPerSquare.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          cover_photo: '',
          profile_photo: '',
          proffesions: '',
          about: '',
          payment_rate: '',
          rs_per_square: ''
        }
      }

      onChangeCoverPhoto(e) {
        this.setState({cover_photo: e.target.value})
      }
    
      onChangeProfilePhoto(e) {
        this.setState({profile_photo: e.target.value})
      }
      
      onChangeProffessions(e) {
        this.setState({proffesions: e.target.value})
      }
      onChangeAbout(e) {
        this.setState({about: e.target.value})
      }
      onChangePaymentRate(e) {
        this.setState({payment_rate: e.target.value})
      }
      onChangeRsPerSquare(e) {
          this.setState({rs_per_square: e.target.value})
      }
      
      onSubmit(e) {
        e.preventDefault()

        const introObject = {
            cover_photo: this.state.cover_photo,
            profile_photo: this.state.profile_photo,
            proffesions: this.state.proffesions,
            about: this.state.about,
            payment_rate: this.state.payment_rate,
            rs_per_square: this.state.rs_per_square,
          };

          axios.post('http://localhost:5000/archi-dashboard/profile/add-intro', introObject)
            .then(res => console.log(res.data));

            this.setState(
                {
                    cover_photo: '',
                    profile_photo: '',
                    proffesions: '',
                    about: '',
                    payment_rate: '', 
                    rs_per_square: ''
                }
            )
        }
          

    render() {
        return (
            <Form id="AddIntroForm" onSubmit={this.onSubmit}>
              <Form.Group controlId="CoverPhoto">
                <Form.Label>Cover Photo</Form.Label>
                <Form.Control type="text" value={this.state.cover_photo} onChange={this.onChangeCoverPhoto}/>
              </Form.Group>
      
              <Form.Group controlId="ProfilePhoto">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control type="text" value={this.state.profile_photo} onChange={this.onChangeProfilePhoto}/>
              </Form.Group>

              <Form.Group controlId="Proffessions">
                <Form.Label>Proffessions</Form.Label>
                <Form.Control type="text" value={this.state.proffesions} onChange={this.onChangeProffessions}/>
              </Form.Group>

              <Form.Group controlId="About">
                <Form.Label>Your About</Form.Label>
                <Form.Control as="textarea" rows="4" value={this.state.about} onChange={this.onChangeAbout}/>
              </Form.Group>

              <Form.Group controlId="PaymentRate">
                <Form.Label>Payment Rate</Form.Label>
                <Form.Control type="text" value={this.state.payment_rate} onChange={this.onChangePaymentRate}/>
              </Form.Group>

              <Form.Group controlId="RsPerSquare">
                <Form.Label>Rs per Square</Form.Label>
                <Form.Control type="text" value={this.state.rs_per_square} onChange={this.onChangeRsPerSquare}/>
              </Form.Group>
      
              <Button variant="primary" size="md" block="block" type="submit">
                Add Intro
              </Button>
            </Form>
          )  
    }
}
export default AddIntroForm






