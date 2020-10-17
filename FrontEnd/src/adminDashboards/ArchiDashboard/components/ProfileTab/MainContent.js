import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddIntro from './AddIntro';
import EditIntro from './EditIntro';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export function ProfModal(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <Router>
           {/* <Button variant="primary" href={"/add-intro"} onClick={() => setModalShow(true)}>
                Add Intro
            </Button>
           } <Button variant="primary" href={"/edit-intro"} onClick={() => setModalShow(true)}>
                Edit Intro
    </Button> */}
             <Link to={"/archi-dashboard/profile/add-intro"} onClick={() => setModalShow(true)}>Add Intro</Link>
             <Link to={"/archi-dashboard/profile/edit-intro"} onClick={() => setModalShow(true)}>Edit Intro</Link>
             <AddIntro
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Switch>
                <Route exact path='/archi-dashboard/profile/intro' component={MainContent} />
                <Route path="/archi-dashboard/profile/add-intro" component={AddIntro} />
                <Route path="/archi-dashboard/profile/edit-intro" component={EditIntro} /> 
              </Switch> 
        </Router>
    )
}

class MainContent extends Component{
   constructor(props) {
    super(props);
    this.state = {
        MainContent: ""
      };
   }

   componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/profile/intro')
      .then(res => {
        this.setState({
          MainContent: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

    render(){
    return (
        <>
            <div className="container-fluid" id="profile_cover">
                       <img
                        src={this.props.cover_photo}
                        alt=".."
                    /> 
                </div>
                   
            <div className="col-sm-10 col-md-9">
                <div className="row mb-2 pb-2" id="profile_main">
                    <div className="col-4">
                        <img
                            src= {this.props.profile_photo}
                            className="rounded float-left img-thumbnail my-md-3 mt-2 ml-md-1 mr-3"
                            alt="..."
                        />
                        <div className="row">
                            <div className="col-6">
                                <h5 className="float-left my-md-2 mt-1 ml-md-1 mr-3">
                                    <i className="far fa-dot-circle" /> Online
                                </h5>
                            </div>
                            <div className="col-6">
                                <h5 className="float-left my-md-2 mt-1 ml-md-1 mr-3">
                                    <i className="fas fa-comment-dots" />
                                </h5>
                            </div>
                            <ul className="list-group list-group-flush" id="payment_data">
                                <li className="list-group-item">
                                    <i className="fas fa-percent" /> Payment Rate : <span>9%</span>
                                </li>
                                <li className="list-group-item">
                                    <i className="fas fa-money-bill-alt" /> Rs per sqrt : <span>200</span>
                                </li>    
                            </ul>
                            <div className="my-md-3 mx-md-3">
                              <ProfModal></ProfModal> 
                                {/*
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                   Add Intro
                                </Button>
                                <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Edit Intro
                                </Button>
                                
                                <AddIntro
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />   */} 
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <h2 className="my-md-3 mx-1 text-align-left p-2">
                            <b>Sathsara Disanayake</b>
                        </h2>
                        <h4 className="my-md-3 mx-1 text-align-left p-2">
                            Residential Architect | Landscape Architect
                        </h4>
                        <ul className="list-unstyled list-inline rating mb-0">
                            <li className="list-inline-item my-md-2 mx-1 text-align-left p-2">
                                <a href="#" className="badge badge-danger">
                                    4.5
                                </a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <i className="fas fa-star amber-text"> </i>
                            </li>
                            <li className="list-inline-item mr-0">
                                <i className="fas fa-star amber-text" />
                            </li>
                            <li className="list-inline-item mr-0">
                                <i className="fas fa-star amber-text" />
                            </li>
                            <li className="list-inline-item mr-0">
                                <i className="fas fa-star amber-text" />
                            </li>
                            <li className="list-inline-item">
                                <i className="fas fa-star-half-alt amber-text" />
                            </li>
                            <li className="list-inline-item">
                                <p className="text-muted"> (413 reviews)</p>
                            </li>
                        </ul>
                        <div className="row my-md-3">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3">
                                        <span className="presentage">100%</span>
                                    </div>
                                    <div className="col-9">
                                        <p className="quality">Job Completed</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <span className="presentage">94%</span>
                                    </div>
                                    <div className="col-9">
                                        <p className="quality">On Time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3">
                                        <span className="presentage">96%</span>
                                    </div>
                                    <div className="col-9">
                                        <p className="quality">On Budget</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <span className="presentage"> 2%</span>
                                    </div>
                                    <div className="col-9">
                                        <p className="quality">Job Repeat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-align-justify my-md-3" id="about_con">
                            <p>       
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
   }
}

export default MainContent
