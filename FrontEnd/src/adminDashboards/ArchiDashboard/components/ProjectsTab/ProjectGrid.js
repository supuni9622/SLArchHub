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
        let variable = { creator: localStorage.getItem('userId') }
        axios.post('http://localhost:5000/archi-dashboard/projects', variable)
          .then(res => {
            this.setState({
              projects: res.data.projects
            });
          })
          .catch((error) => {
            console.log(error);
          }) 
         /* if (res.data.success) {
            console.log(res.data.projects)
            this.setState({
              projects: res.data.projects
            });
        } else {
            alert('Failed to get Favorite Projects')
        }
    }) */
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



