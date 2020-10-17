import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import ImageSlider from '../../utils/ImageSlider'

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject() {
        axios.delete('http://localhost:5000/archi-dashboard/projects/delete-project/' + this.props.obj._id)
            .then((res) => {
                console.log('Project successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Card style={{ width: '16rem' }} id="projectCard">
                <ImageSlider images={this.props.obj.images} />
                <Card.Body>
                    <Card.Title>{this.props.obj.name}</Card.Title>
                   <Link id="edit" className="edit-link" to={"/archi-dashboard/projects/edit-project/" + this.props.obj._id}>
                       <i style={{fontSize: '1rem', paddingRight:'2px', marginRight:'0px'}} className="fas fa-edit"></i>   Edit
                    </Link>
                    <Button id="delete" onClick={this.deleteProject} size="sm" variant="primary"> 
                    <i  style={{fontSize: '1rem',  paddingRight:'2px', marginRight:'0px'}} className="fas fa-trash-alt"></i> Delete</Button>
                </Card.Body>
            </Card>
                             
                 
        )
    }
}

export default ProjectCard

