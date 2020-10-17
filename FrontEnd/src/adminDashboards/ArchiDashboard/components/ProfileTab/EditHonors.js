import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class EditHonors extends Component {

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

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/edit-honor/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              honors: res.data.honors,
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangeHonors(e) {
        this.setState({honors: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const honorsObject = {
            honors: this.state.honors
          };

          axios.put('http://localhost:5000/archi-dashboard/profile/update-honor/' + this.props.match.params.id, honorsObject)
            .then((res) => {
              console.log(res.data)
              console.log('Honors successfully updated')
            }).catch((error) => {
              console.log(error)
            })
      
          // Redirect to Projects Grid
          this.props.history.push('/honors')
      }

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h6>Edit Your Achievement</h6>
                <Form id="addHonorsForm" onSubmit={this.onSubmit}>
                    <Form.Group controlId="Honors">
                        <Form.Control type="text" value={this.state.honors} onChange={this.onChangeHonors}/>
                    </Form.Group>
                    <Button variant="primary" size="md" block="block" type="submit">
                        Edit Achievement
                    </Button>
                </Form>    
            </div>
        )
    }
}

export default EditHonors
