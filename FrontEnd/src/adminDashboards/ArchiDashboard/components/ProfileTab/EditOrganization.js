import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class EditOrganization extends Component {

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

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/edit-organization/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              organizations: res.data.organizations,
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangeOrganization(e) {
        this.setState({organizations: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const organizationObject = {
            organizations: this.state.organizations
          };

          axios.put('http://localhost:5000/archi-dashboard/profile/update-organization/' + this.props.match.params.id, organizationObject)
            .then((res) => {
              console.log(res.data)
              console.log('Organization successfully updated')
            }).catch((error) => {
              console.log(error)
            })
      
          // Redirect to Projects Grid
          this.props.history.push('/organizations')
      }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h4>Edit Your Organizations</h4>
                <Form id="addOrganizationForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Organizations">
                        <Form.Control type="text" value={this.state.organizations} onChange={this.onChangeOrganization}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Edit Organization
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default EditOrganization
