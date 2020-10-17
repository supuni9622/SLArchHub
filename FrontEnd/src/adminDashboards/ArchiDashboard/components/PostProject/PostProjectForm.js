import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import '../../css/archiProjects.css';
import axios from 'axios';

class PostProjectFForm extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeBidProject = this.onChangeBidProject.bind(this);
        this.onChangeBiddingPurpose = this.onChangeBiddingPurpose.bind(this);
        this.onChangeDesignType = this.onChangeDesignType.bind(this);
        this.onChangeBudgetRate = this.onChangeBudgetRate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeMaterials = this.onChangeMaterials.bind(this);
        this.onChangeFolder = this.onChangeFolder.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          bidProject: '',
          biddingPurpose: '',
          designType: '',
          budgetRate: '',
          description: '',
          materials : '',
          folder: '' 
        }
      }

      onChangeBidProject(e) {
        this.setState({bidProject: e.target.value})
      }
    
      onChangeBiddingPurpose(e) {
        this.setState({biddingPurpose: e.target.value})
      }

      onChangeDesignType(e) {
        this.setState({designType: e.target.value})
      }

      onChangeBudgetRate(e) {
        this.setState({budgetRate: e.target.value})
      }

      onChangeDescription(e) {
        this.setState({description: e.target.value})
      }

      onChangeMaterials(e) {
        this.setState({materials: e.target.value})
      }

      onChangeFolder(e) {
        this.setState({folder: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const bidObject = {
            bidProject: this.state.bidProject,
            biddingPurpose: this.state.biddingPurpose,
            designType: this.state.designType,
            budgetRate: this.state.budgetRate,
            description: this.state.description,
            materials : this.state.materials,
            folder: this.state.folder 
          };

          axios.post('http://localhost:5000/add-bid/', bidObject)
            .then(res => console.log(res.data));

            this.setState({
                bidProject: '',
                biddingPurpose: '',
                designType: '',
                budgetRate: '',
                description: '',
                materials : '',
                folder: '' 
            })

        // Redirect to Posted Projects
          this.props.history.push('/bids')
        }
          
    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h2>Post New Project</h2>
            <Form id="PostProjectForm" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="Name">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="SinhaVilla"
                            value={this.state.bidProject} 
                            onChange={this.onChangeBidProject}/>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                    <Form.Group controlId="biddingPurpose">
                        <Form.Label>
                            Bidding Purpose
                        </Form.Label>
                            <Form.Control as="select">
                                <option value="construction">Construction</option>
                                <option value="interiorDesign">Interior Design</option>
                            </Form.Control>
                        </Form.Group>  
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <Form.Group controlId="budgetRate">
                        <Form.Label>
                            Design Type
                        </Form.Label>
                            <Form.Control as="select">
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="hotel">Hotel</option>
                                <option value="restaurent">Restaurent</option>
                                <option value="commercialBuilding">Commercial Building</option>
                                <option value="largeGarden">Large Garden</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group controlId="budgetRate">
                            <Form.Label>
                                Budget Rate
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="120,000 - 150,000"
                                        aria-label="budget"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.budgetRate} 
                                        onChange={this.onChangeBudgetRate}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                    </div>
                </div>
                    <Form.Group controlId="projectDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="4"
                            placeholder="Describe your project here"
                            value={this.state.description} 
                            onChange={this.onChangeDescription} 
                            />
                    </Form.Group>  
                <Form.Group>
                        <Form.Label>
                            Materials
                        </Form.Label>
                    <div className="row">
                       <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Bricks"
                               bidProject="bricks"
                                id="bricks"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Stone"
                               bidProject="stone"
                                id="stone"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Concrete"
                               bidProject="concrete"
                                id="concrete"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Metal"
                               bidProject="metal"
                                id="metal"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Wood"
                               bidProject="wood"
                                id="wood"
                            />
                        </div>   
                        
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Glass"
                               bidProject="glass"
                                id="glass"
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Bamboo"
                               bidProject="bamboo"
                                id="bomboo"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Grass"
                               bidProject="grass"
                                id="grass"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Marbal"
                               bidProject="marbal"
                                id="marbal"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Sand"
                               bidProject="sand"
                                id="sand"
                            />
                        </div>
                    </div>
                </Form.Group>
                   <Form.Group>
                        <Form.File
                            className="position-relative"
                            name="file"
                            label="Project File"
                            value={this.state.folder} 
                            onChange={this.onChangeFolder}
                            id="validationFormik107"
                            feedbackTooltip
                        />
                    </Form.Group>
              <Button variant="primary" size="md" block="block" type="submit">
                Post Project
              </Button>
            </Form>
          </div>
          )  
    }
}
export default PostProjectFForm





