import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Pagination from './Pagination'
import { Link } from 'react-router-dom';


function ProjectCards(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem', border: '2px solid white' }} id="projectCard">
        <Card.Img variant="top" src={props.obj.projectImage} />
        <Card.Body>
          <Card.Title>{props.obj.name} </Card.Title>
           {/* <Link id="edit" className="edit-link" to={"/edit-project/" + this.props.obj._id}>
              <i class="fas fa-edit"></i>   Preview
              </Link> */}
           {/*} <a className="btn btn-outline-success btn-sm linkButton" href="/projects/:id" target="blank">
                Preview
            </a>*/}
              <Link to= {"/projects/single"} >Preview</Link>
              <a className="btn btn-outline-danger btn-sm linkButton" href="/" target=" ">
                <i className="far fa-heart" style={{ fontSize: 10}}/>
              </a>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/projects/')
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
      return <ProjectCards obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
                <div id="main">
                  <section id="projects">
                    <div className="container-fluid" id="grid-view" >
                      <div className="row" style={{ marginBottom:20 }} >
                          {this.DataGrid()} 
                      </div>
                    </div>
                  </section>
                  <div style={{ margin:10 }}>
                    <Pagination></Pagination>    
                  </div>
                            
                </div>
            </React.Fragment>
        )
    }
}

export default MainContent
