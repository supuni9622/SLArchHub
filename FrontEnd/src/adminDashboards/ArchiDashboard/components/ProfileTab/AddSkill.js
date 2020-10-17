import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class AddSkill extends Component {

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
      onChangeSkill(e) {
        this.setState({skills: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const skillObject = {
            skills: this.state.skills
          };

          axios.post('http://localhost:5000/archi-dashboard/profile/add-skill/', skillObject)
            .then(res => console.log(res.data));

            this.setState({skill:''})

        // Redirect to skills list
          this.props.history.push('/skills')
        }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h4>Add Your Skills</h4>
                <Form id="addSkillForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Skills">
                        <Form.Control type="text" value={this.state.skills} onChange={this.onChangeSkill}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Add Skill
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default AddSkill
