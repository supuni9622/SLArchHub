import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

class SkillItem extends Component {

    constructor(props) {
        super(props);
        this.deleteSkill = this.deleteSkill.bind(this);
    }

    deleteSkill() {
        axios.delete('http://localhost:5000/archi-dashboard/profile/delete-skill/' + this.props.obj._id)
            .then((res) => {
                console.log('Skill successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        }

    render() {
        return (
            <>
                 <ListGroup.Item>
                     {this.props.obj.skills}
                        <Link id="edit" className="edit-link" to={"/archi-dashboard/profile/edit-skill/" + this.props.obj._id}>
                            <i class="fas fa-edit"></i> 
                        </Link>
                        <Button id="delete" onClick={this.deleteSkill} size="sm" variant="primary"> 
                            <i class="fas fa-trash-alt"></i>
                        </Button>
                </ListGroup.Item>  
            </>
        )
    }
}

export default SkillItem
