import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class EditSkill extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeSkill = this.onChangeSkill.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          skills: ''
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/edit-skill/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              skills: res.data.skills,
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangeSkill(e) {
        this.setState({skills: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const skillObject = {
            skills: this.state.skills
          };

          axios.put('http://localhost:5000/archi-dashboard/profile/update-skill/' + this.props.match.params.id, skillObject)
            .then((res) => {
              console.log(res.data)
              console.log('Skill successfully updated')
            }).catch((error) => {
              console.log(error)
            })
      
          // Redirect to Projects Grid
          this.props.history.push('/skills')
      }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h4>Edit Your Skills</h4>
                <Form id="addSkillForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Skills">
                        <Form.Control type="text" value={this.state.skills} onChange={this.onChangeSkill}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Edit Skill
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default EditSkill
