import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

class OrganizationItem extends Component {

    constructor(props) {
        super(props);
        this.deleteOrganization = this.deleteOrganization.bind(this);
    }

    deleteOrganization() {
        axios.delete('http://localhost:5000/archi-dashboard/profile/delete-organization/' + this.props.obj._id)
            .then((res) => {
                console.log('Organization successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        }

    render() {
        return (
            <>
                 <ListGroup.Item>
                     {this.props.obj.organizations}
                        <Link id="edit" className="edit-link" to={"/archi-dashboard/profile/edit-organization/" + this.props.obj._id}>
                            <i class="fas fa-edit"></i> 
                        </Link>
                        <Button id="delete" onClick={this.deleteOrganization} size="sm" variant="primary"> 
                            <i class="fas fa-trash-alt"></i>
                        </Button>
                </ListGroup.Item>  
            </>
        )
    }
}

export default OrganizationItem
