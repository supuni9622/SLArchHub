import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class AddOrganization extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeOrganization = this.onChangeOrganization.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          organizations: ''
        }
      }
      onChangeOrganization(e) {
        this.setState({organizations: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const organizationObject = {
            organizations: this.state.organizations
          };

          axios.post('http://localhost:5000/archi-dashboard/profile/add-organization/', organizationObject)
            .then(res => console.log(res.data));

            this.setState({organizations:''})

        // Redirect to Organizations list
          this.props.history.push('/organizations')
        }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h6>Add Your Organizations</h6>
                <Form id="addOrganizationForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Organizations">
                        <Form.Control type="text" value={this.state.organizations} onChange={this.onChangeOrganization}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Add Organization
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default AddOrganization
