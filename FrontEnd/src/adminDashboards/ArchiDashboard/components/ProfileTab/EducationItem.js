import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

class EducationItem extends Component {

    constructor(props) {
        super(props);
        this.deleteEducation = this.deleteEducation.bind(this);
    }

    deleteEducation() {
        axios.delete('http://localhost:5000/archi-dashboard/profile/delete-education/' + this.props.obj._id)
            .then((res) => {
                console.log('Education successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        }

    render() {
        return (
            <>
                 <ListGroup.Item>
                    <div className="row">
                        {this.props.obj.degree}   |  <span className="text-muted">{this.props.obj.collage}</span>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Started Date: {this.props.obj.start_date}
                        </div>
                        <div className="col-6">
                            Finished Date: {this.props.obj.end_date}
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-6">
                            <Link id="edit" className="edit-link" to={"/archi-dashboard/profile/edit-Education/" + this.props.obj._id}>
                                <i class="fas fa-edit"></i>    Edit
                            </Link>
                        </div>
                        <div className="col-6">
                            <Button id="delete" onClick={this.deleteEducation} size="sm" variant="primary"> 
                                <i class="fas fa-trash-alt"></i>    Delete
                            </Button>
                        </div>
                    </div>
                </ListGroup.Item>  
            </>
        )
    }
}

export default EducationItem
