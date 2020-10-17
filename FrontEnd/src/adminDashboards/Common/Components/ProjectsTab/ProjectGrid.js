import React, { Component } from 'react'
import axios from 'axios';
import ProjectCard from './ProjectCard'

class ProjectGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
          projects: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/projects')
          .then(res => {
            this.setState({
              projects: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          }) 
      }

      DataGrid() {
        return this.state.projects.map((res, i) => {
          return <ProjectCard obj={res} key={i} />;
        });
      }
    render() {
        return (
                <div className="row" id="grid">
                    {this.DataGrid()} 
                </div>         
        )
    }
}

export default ProjectGrid



