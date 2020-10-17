import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class AddHonors extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeHonors = this.onChangeHonors.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          honors: ''
        }
      }
      onChangeHonors(e) {
        this.setState({honors: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const honorsObject = {
            honors: this.state.honors
          };

          axios.post('http://localhost:5000/archi-dashboard/profile/add-honor/', honorsObject)
            .then(res => console.log(res.data));

            this.setState({honors:''})

        // Redirect to Honors list
          this.props.history.push('/honors')
        }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h6>Add Your Achievements</h6>
                <Form id="addHonorsForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Honors">
                        <Form.Control type="text" value={this.state.honors} onChange={this.onChangeHonors}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Add Achievement
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default AddHonors
