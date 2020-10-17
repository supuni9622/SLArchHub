import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {connect} from 'react-redux';
import {UPDATE_USER, GET_USER} from '../../../_actions/types';

//import { USER_SERVER } from '../../../components/Config.js';

//import axios from 'axios';


class Profile extends Component{

  handleEdit = (e) => {
    e.preventDefault();
    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;
    const data = {
      firstName,
      lastName
    }
    this.props.dispatch({type: 'GET_USER',id: localStorage.getItem('userId')})
    this.props.dispatch({type: 'UPDATE_USER', id: localStorage.getItem('userId'), data: data })
}

render(){
  return(
    <div>
       <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getFirstName = input}
    defaultValue={this.props.user.firstName}  /><br /><br />
    <textarea required rows="5" ref={(input) => this.getLastName = input}
    defaultValue={this.props.user.lastName} cols="28" /><br /><br />
    <button>Update</button>
  </form>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
      user: state
  }
}

export default connect(mapStateToProps)(Profile);
































/*

class Profile extends Component {

    constructor(props) {
        super(props)
      
        console.log(this.props);
        // Setting up functions
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          firstName: '',
          lastName: '' 
        }
      }

      componentDidMount() {
        //axios.get('http://localhost:5000/users/edit/' + localStorage.getItem('userId'))
         axios.get(`${USER_SERVER}/edit/` + this.props.match.params.id)
        //axios.get(`${USER_SERVER}/edit/` + localStorage.getItem('userId'))
          .then(res => {
              console.log(res.data)
              
            this.setState({
              firstName: res.data.firstName,
              lastName: res.data.lastName

            });
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

      onSubmit(e) {
        e.preventDefault()

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
          };
      
         // axios.put('http://localhost:5000/users/update/' + localStorage.getItem('userId'), user)
         axios.get(`${USER_SERVER}/update/` + this.props.match.params.id)
            .then((res) => {
              console.log(res.data)
              console.log('Profile successfully updated')
            }).catch((error) => {
              console.log(error)
            })
      
          // Redirect to Projects Grid
          this.props.history.push('/archi-dashboard/profile')
      }
          

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h2>Edit Profile</h2>
            <Form id="addProjectForm" onSubmit={this.onSubmit}>
            <div className="row">
                    <div className="col-lg-12 col-sm-6">
                    <Form.Group controlId="Name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                    </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="architect">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeLastName}/>
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
export default Profile */