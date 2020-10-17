import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import ProfilePhotoUpload from '../../utils/ProfilePhotoUpload';

import axios from 'axios';
import { Link } from 'react-router-dom';

class EditAdmin extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCoverPhoto = this.onChangeCoverPhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            contactNumber: '',
            address: '',
            profile_photo: '',
            cover_photo: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/admin-dashboard/edit-admin/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              contactNumber: res.data.contactNumber,
              address:res.data.address,
              cover_photo: res.data.cover_photo
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

          onSubmit(e) {
              e.preventDefault()

              const adminObject = {
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  contactNumber: this.state.contactNumber,
                  address: this.state.address,
                  profile_photo: this.state.profile_photo,
                  cover_photo: this.state.cover_photo
              }

              axios.put('http://localhost:5000/admin-dashboard/update-admin/' + this.props.match.params.id, adminObject)
              .then((res) => {
                console.log(res.data)
                console.log('Admin details successfully updated')
              }).catch((error) => {
                console.log(error)
              })
          }

          updateFiles = (newProfilePhoto) => {
            this.setState({ profile_photo: newProfilePhoto })
        }

    render(){
        return(
            <div className="container" style={{padding:"30px", boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', marginBottom:"60px"}}>
                <Form onSubmit={this.onSubmit}>
                  <div className="row" style={{marginBottom:"20px"}}>
                    <div className="col-6" style={{marginLeft:"100px"}}>
                        <h6>Add your profile photo..</h6>
                        <ProfilePhotoUpload refreshFunction={this.updateFiles} />
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
                 
                 <Button variant="info" size="md" block="block" type="submit">
                     Save Changes
                 </Button>
              </Form>
             
              <Link id="edit" className="edit-link" to={"/admin-dashboard/admin/"} style={{color:"blue"}}>
                Back to Profile
            </Link>
            </div>
        )
    }
}

export default EditAdmin