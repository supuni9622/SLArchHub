import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

function ProjectTop(props) { 
        return (
            <React.Fragment>
                 <Card className="bg-dark text-white" id="project_cover">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg" />
                        <Card.ImgOverlay id="overlay">
                      <Row>
                          <Col>
                          <Card.Title ><h6 id="text">{props.obj.name}</h6></Card.Title>
                        </Col>                   
                      </Row>  
                  </Card.ImgOverlay>
                </Card>

                <div className="container project_main">
                <div className="row">
                    <div class="col-4" id="description">
                    <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Architect : 
                    </div>
                    <div className="col-6">
                        {props.obj.architect}
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Interior Designer : 
                    </div>
                    <div className="col-6">
                        Nimal Perera
                    </div>
                </div>
                <div className="row mainDetails"> 
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Construction Company : 
                    </div>
                    <div className="col-6">
                        Nimal Perera
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Landscape Designer : 
                    </div>
                    <div className="col-6">
                        Nimal Perera
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Design : 
                    </div>
                    <div className="col-6">
                        Exterior Design
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Design Category : 
                    </div>
                    <div className="col-6">
                        House
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Started Day : 
                    </div>
                    <div className="col-6">
                        2019.10.20
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Finished Date : 
                    </div>
                    <div className="col-6">
                        2020.5.20
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Area : 
                    </div>
                    <div className="col-6">
                        2500 sqrt
                    </div>
                </div>
                <div className="row mainDetails">
                    <div className="col-6">
                       <i class="fas fa-user-tie"></i>   Budget : 
                    </div>
                    <div className="col-6">
                        Rs. 200,000.00
                    </div>
                </div>

                </div>
                    <div class="col-8" id="rightSide">
                    <div id="details">
                <h2>Description</h2>
                <p>
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                Text description provided by the architects. Located on the top floor of a multi-family housing building in Barcelona’s Raval neighbourhood, the penthouse has access from the centre to a floor strangled by a lightwell that divides the house into two separate spaces: the first one, a street-facing room, and the second one, a four-times larger space divided by a series of parallel walls, derived from a structural rehabilitation.
                </p>
                </div>
                </div>
                </div>
            </div>

            </React.Fragment>
        )
    }

    class SingleProject extends Component {
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
            return <ProjectTop obj={res} key={i} />;
          });
        }
          render() {
              return (
                  <React.Fragment>
                      <div id="main">
                        <section id="projects">
                          <div className="container-fluid" id="grid-view">
                            <div className="row">
                                {this.DataGrid()} 
                            </div>
                          </div>
                        </section>            
                      </div>
                  </React.Fragment>
              )
          }
      }
      
      export default SingleProject
      
