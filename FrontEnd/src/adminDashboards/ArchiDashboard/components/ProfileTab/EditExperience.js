import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class EditExperience extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeWork = this.onChangeWork.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          work: '',
          place: '',
          start_date: '',
          end_date: ''
        }
      }
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/edit-experience/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              work: res.data.work,
              place: res.data.place,
              start_date: res.data.start_date,
              end_date: res.data.end_date
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangeWork(e) {
        this.setState({work: e.target.value})
      }
      
      onChangePlace(e) {
        this.setState({place: e.target.value})
      }

      onChangeStartDate(e) {
        this.setState({start_date: e.target.value})
      }

      onChangeEndDate(e) {
        this.setState({end_date: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const experienceObject = {
            work: this.state.work,
            place: this.state.place,
            start_date: this.state.start_date,
            end_date: this.state.end_date
          };

          axios.put('http://localhost:5000/archi-dashboard/profile/update-experience/' + this.props.match.params.id, experienceObject)
          .then((res) => {
            console.log(res.data)
            console.log('Experience successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Projects Grid
        this.props.history.push('/experience')
        }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h6>Edit Your Work Experience </h6>
                <Form id="addExperienceForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Experiences">
                        <Form.Label>Work Experience </Form.Label>
                        <Form.Control type="text" value={this.state.work} onChange={this.onChangeWork}/>
                    </Form.Group>
                    <Form.Group controlId="Experiences1">
                        <Form.Label>Work Place</Form.Label>
                        <Form.Control type="text" value={this.state.place} onChange={this.onChangePlace}/>
                    </Form.Group>
                    <Form.Group controlId="Experiences2">
                        <Form.Label>Started Date</Form.Label>
                        <Form.Control type="date" value={this.state.start_date} onChange={this.onChangeStartDate}/>
                    </Form.Group>
                    <Form.Group controlId="Experiences3">
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

export default EditExperience
