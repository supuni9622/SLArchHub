import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class EditEducation extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeCollage = this.onChangeCollage.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          degree: '',
          collage: '',
          start_date: '',
          end_date: ''
        }
      }
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/edit-education/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              degree: res.data.degree,
              collage: res.data.collage,
              start_date: res.data.start_date,
              end_date: res.data.end_date
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangeDegree(e) {
        this.setState({degree: e.target.value})
      }
      
      onChangeCollage(e) {
        this.setState({collage: e.target.value})
      }

      onChangeStartDate(e) {
        this.setState({start_date: e.target.value})
      }

      onChangeEndDate(e) {
        this.setState({end_date: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const educationObject = {
            degree: this.state.degree,
            collage: this.state.collage,
            start_date: this.state.start_date,
            end_date: this.state.end_date
          };

          axios.put('http://localhost:5000/archi-dashboard/profile/update-education/' + this.props.match.params.id, educationObject)
          .then((res) => {
            console.log(res.data)
            console.log('Education successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Projects Grid
        this.props.history.push('/education')
        }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h6>Edit Your Education Qualifications</h6>
                <Form id="addEducationForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Educations">
                        <Form.Label>Education Qualification</Form.Label>
                        <Form.Control type="text" value={this.state.degree} onChange={this.onChangeDegree}/>
                    </Form.Group>
                    <Form.Group controlId="Educations1">
                        <Form.Label>University/Institute/Collage</Form.Label>
                        <Form.Control type="text" value={this.state.collage} onChange={this.onChangeCollage}/>
                    </Form.Group>
                    <Form.Group controlId="Educations2">
                        <Form.Label>Started Date</Form.Label>
                        <Form.Control type="date" value={this.state.start_date} onChange={this.onChangeStartDate}/>
                    </Form.Group>
                    <Form.Group controlId="Educations3">
                        <Form.Label>Finished Date</Form.Label>
                        <Form.Control type="date" value={this.state.end_date} onChange={this.onChangeEndDate}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Save Changes 
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default EditEducation
