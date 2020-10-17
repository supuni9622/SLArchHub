import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

class HonorsItem extends Component {

    constructor(props) {
        super(props);
        this.deleteHonor = this.deleteHonor.bind(this);
    }

    deleteHonor() {
        axios.delete('http://localhost:5000/archi-dashboard/profile/delete-honor/' + this.props.obj._id)
            .then((res) => {
                console.log('Honors successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        }

    render() {
        return (
            <>
                 <ListGroup.Item>
                     {this.props.obj.honors}
                        <Link id="edit" className="edit-link" to={"/archi-dashboard/profile/edit-honor/" + this.props.obj._id}>
                            <i class="fas fa-edit"></i> 
                        </Link>
                        <Button id="delete" onClick={this.deleteHonor} size="sm" variant="primary"> 
                            <i class="fas fa-trash-alt"></i>
                        </Button>
                </ListGroup.Item>  
            </>
        )
    }
}

export default HonorsItem
