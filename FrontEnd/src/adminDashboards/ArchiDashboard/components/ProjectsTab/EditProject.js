import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import '../../css/archiProjects.css';
import axios from 'axios';

class EditProject extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeArchitect = this.onChangeArchitect.bind(this);
        this.onChangeInteriorDesigner = this.onChangeInteriorDesigner.bind(this);
        this.onChangeLandscapeDesigner = this.onChangeLandscapeDesigner.bind(this);
        this.onChangeConstruction = this.onChangeConstruction.bind(this);
        this.onChangeStartedDate = this.onChangeStartedDate.bind(this);
        this.onChangeFinishedDate = this.onChangeFinishedDate.bind(this);
        this.onChangeDesignTypeExterior = this.onChangeDesignTypeExterior.bind(this);
        this.onChangeDesignTypeLandscape = this.onChangeDesignTypeLandscape.bind(this);
        this.onChangeDesignTypeInterior = this.onChangeDesignTypeInterior.bind(this);
        this.onChangeDesignCategory = this.onChangeDesignCategory.bind(this);
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeBricks = this.onChangeBricks.bind(this);
        this.onChangeStone = this.onChangeStone.bind(this);
        this.onChangeConcrete = this.onChangeConcrete.bind(this);
        this.onChangeMetal = this.onChangeMetal.bind(this);
        this.onChangeWood = this.onChangeWood.bind(this);
        this.onChangeGlass = this.onChangeGlass.bind(this);
        this.onChangeBamboo = this.onChangeBamboo.bind(this);
        this.onChangeGrass = this.onChangeGrass.bind(this);
        this.onChangeMarbal = this.onChangeMarbal.bind(this);
        this.onChangeSand = this.onChangeSand.bind(this);
        this.onChangeStyle = this.onChangeStyle.bind(this);
        //this.onChangeFile=this.onChangeFile.bind(this)
        this.onChangeStorey = this.onChangeStorey.bind(this);
        this.onChangeBedRooms = this.onChangeBedRooms.bind(this);
        this.onChangeBathRooms = this.onChangeBathRooms.bind(this);
        this.onChangeSustainability = this.onChangeSustainability.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          architect: '',
          interiorDesigner: '',
          landscapeDesigner: '',
          construction: '',
          startedDate: '',
          finishedDate: '',
          exteriorDesign: false,
          landscapeDesign: false,
          interiorDesign: false,
          designCategory: '',
          area: '',
          budget: '',
          bricks : '',
          stone: '',
          concrete: '',
          wood: '',
          metal: '',
          glass:'',
          bamboo: '',
          grass: '',
          marbal: '',
          sand: '',
          style: '',
          //projectFolder: '',
          storey: '',
          bedRooms: '',
          bathRooms: '',
          sustainability: false ,
          description: '' 
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/projects/edit-project/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              name: res.data.name,
              architect: res.data.architect,
              interiorDesigner: res.data.interiorDesigner,
              landscapeDesigner: res.data.landscapeDesigner,
              construction: res.data.construction,
              startedDate: res.data.startedDate,
              finishedDate: res.data.finishedDate,
              exteriorDesign:this.state.exteriorDesign,
              landscapeDesign:this.state.landscapeDesign,
              interiorDesign:this.state.interiorDesign,
              designCategory: res.data.designCategory,
              area: res.data.area,
              budget: res.data.budget,
              bricks: res.data.bricks,
              stone: res.data.stone,
              concrete: res.data.concrete,
              metal: res.data.metal,
              wood: res.data.wood,
              grass: res.data.grass,
              glass: res.data.glass,
              marbal: res.data.marbal,
              bamboo: res.data.bamboo,
              sand: res.data.sand,
              style: res.data.style,
             // projectFolder: res.data.projectFolder,
              storey: res.data.storey,
              bedRooms: res.data.bedRooms,
              bathRooms: res.data.bathRooms,
              sustainability: res.data.sustainability ,
              description: res.data.description

            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      onChangeProjectName(e) {
        this.setState({name: e.target.value})
      }
      onChangeArchitect(e) {
        this.setState({architect: e.target.value})
      }

      onChangeInteriorDesigner(e) {
        this.setState({interiorDesigner: e.target.value})
      }

      onChangeLandscapeDesigner(e) {
        this.setState({landscapeDesigner: e.target.value})
      }

      onChangeConstruction(e) {
        this.setState({construction: e.target.value})
      }

      onChangeStartedDate(e) {
        this.setState({startedDate: e.target.value})
      }

      onChangeFinishedDate(e) {
        this.setState({finishedDate: e.target.value})
      }

      onChangeDesignTypeExterior(e) {
        const target = e.target;
        const value = target.name === 'exteriorDesign' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      onChangeDesignTypeLandscape(e) {
        const target = e.target;
        const value = target.name === 'landscapeDesign' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeDesignTypeInterior(e) {
        const target = e.target;
        const value = target.name === 'interiorDesign' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      onChangeDesignCategory(e) {
        this.setState({designCategory: e.target.value})
      }

      onChangeArea(e) {
        this.setState({area: e.target.value})
      }
      onChangeBudget(e) {
        this.setState({budget: e.target.value})
      }

      onChangeBricks(e) {
        const target = e.target;
        const value = target.name === 'bricks' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      onChangeStone(e) {
        const target = e.target;
        const value = target.name === 'stone' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeConcrete(e) {
        const target = e.target;
        const value = target.name === 'concrete' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeMetal(e) {
        const target = e.target;
        const value = target.name === 'metal' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeWood(e) {
        const target = e.target;
        const value = target.name === 'wood' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeGlass(e) {
        const target = e.target;
        const value = target.name === 'glass' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeGrass(e) {
        const target = e.target;
        const value = target.name === 'grass' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeBamboo(e) {
        const target = e.target;
        const value = target.name === 'bamboo' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeMarbal(e) {
        const target = e.target;
        const value = target.name === 'marbal' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeSand(e) {
        const target = e.target;
        const value = target.name === 'sand' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeStyle(e) {
        this.setState({style: e.target.value})
      }
    /*  onChangeFile(e) {
        this.setState({projectFolder: e.target.value})
      }*/

      onChangeStorey(e) {
        this.setState({storey: e.target.value})
      }

      onChangeBedRooms(e) {
        this.setState({bedRooms: e.target.value})
      }
      onChangeBathRooms(e) {
        this.setState({bathRooms: e.target.value})
      }

      onChangeSustainability(e) {
        const target = e.target;
        const value = target.name === 'sustainability' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeDescription(e) {
        this.setState({description: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const projectObject = {
            name: this.state.name,
            architect: this.state.architect,
            interiorDesigner: this.state.interiorDesigner,
            landscapeDesigner: this.state.landscapeDesigner,
            construction: this.state.construction,
            startedDate: this.state.startedDate,
            finishedDate: this.state.finishedDate,
            exteriorDesign:this.state.exteriorDesign,
            landscapeDesign:this.state.landscapeDesign,
            interiorDesign:this.state.interiorDesign,
            designCategory: this.state.designCategory,
            area: this.state.area,
            budget: this.state.budget,
            bricks : this.state.materials,
            stone: this.state.stone,
            concrete: this.state.concrete,
            wood: this.state.wood,
            metal: this.state.metal,
            glass: this.state.glass,
            bamboo: this.state.bamboo,
            grass: this.state.grass,
            marbal: this.state.marbal,
            sand: this.state.sand,
            style: this.state.style,
           // projectFolder: this.state.projectFolder,
            storey: this.state.storey,
            bedRooms: this.state.bedRooms,
            bathRooms: this.state.bathRooms,
            sustainability: this.state.sustainability,
            description: this.state.description 
          };
      
          axios.put('http://localhost:5000/archi-dashboard/projects/update-project/' + this.props.match.params.id, projectObject)
            .then((res) => {
              console.log(res.data)
              console.log('Project successfully updated')
            }).catch((error) => {
              console.log(error)
            })
      
          // Redirect to Projects Grid
          this.props.history.push('/archi-dashboard/projects')
      }
          

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h2>Edit Project</h2>
            <Form id="addProjectForm" onSubmit={this.onSubmit}>
            <div className="row">
                    <div className="col-lg-12 col-sm-6">
                    <Form.Group controlId="Name">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeProjectName}/>
                    </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="architect">
                        <Form.Label>Architect</Form.Label>
                        <Form.Control type="text" value={this.state.architect} onChange={this.onChangeArchitect}/>
                    </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group controlId="interiorDesigner">
                            <Form.Label>Interior Designer</Form.Label>
                            <Form.Control type="text" value={this.state.interiorDesigner} onChange={this.onChangeInteriorDesigner}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="landscapeDesigner">
                        <Form.Label>Landscape Designer</Form.Label>
                        <Form.Control type="text" value={this.state.landscapeDesigner} onChange={this.onChangeLandscapeDesigner}/>
                    </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group controlId="contruction">
                            <Form.Label>Construction Company</Form.Label>
                            <Form.Control type="text" value={this.state.construction} onChange={this.onChangeConstruction}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="startedDate">
                        <Form.Label>Started Date</Form.Label>
                        <Form.Control type="date" value={this.state.startedDate} onChange={this.onChangeStartedDate}/>
                    </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Group controlId="finishedDate">
                            <Form.Label>Finished Date</Form.Label>
                            <Form.Control type="date" value={this.state.finishedDate} onChange={this.onChangeFinishedDate}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
               
                    <div className="col-6">
                    <Form.Group>
                    <div className="row">
                    <Form.Label>
                        Design Type
                    </Form.Label>
                </div>
               
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Form.Check
                            type="radio"
                            label="Exterior Design"
                            name="exteriorDesign"
                            id="exteriorDesign"
                            //value="Exterior Design"
                            checked={this.state.exteriorDesign} 
                            onChange={this.onChangeDesignTypeExterior}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <Form.Check
                            type="radio"
                            label="Landscape Design"
                            name="landscapeDesign"
                            id="landscapeDesign"
                            //value=" Interior Design"
                            checked={this.state.interiorDesign} 
                            onChange={this.onChangeDesignTypeLandscape}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <Form.Check
                            type="radio"
                            label="Landscape Design"
                            name="landscapeDesign"
                            id="landscapeDesign"
                            //value=" Landscape Design"
                            checked={this.state.landscapeDesign} 
                            onChange={this.onChangeDesignTypeLandscape}
                        />
                    </div>
                    </div>
                    </Form.Group>
                    </div>    
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="designCategory">
                        <Form.Label>
                            Design Category
                        </Form.Label>
                            <Form.Control as="select" value={this.state.designCategory} onChange={this.onChangeDesignCategory}>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="hotel">Hotel</option>
                                <option value="restaurent">Restaurent</option>
                                <option value="commercialBuilding">Commercial Building</option>
                                <option value="indoorCourtyard">Indoor Courtyard</option>
                                <option value="smallHomeGarden">Small Home Garden</option>
                                <option value="largeGarden">Large Garden</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="area">
                            <Form.Label>
                                Floor Area
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="1200"
                                        aria-label="area"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.area} 
                                        onChange={this.onChangeArea}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">Square Feets</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <Form.Group controlId="budget">
                            <Form.Label column sm={2}>
                                Budget
                            </Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="120,000"
                                        aria-label="budget"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.budget} 
                                        onChange={this.onChangeBudget}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                        </Form.Group>
                    </div>
                </div>
                <Form.Group>
                    <div className="row">
                        <Form.Label>
                            Materials
                        </Form.Label>
                    </div>
                    <div className="row">
                       <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Bricks"
                                name="bricks"
                                id="bricks"
                                checked={this.state.bricks} 
                                onChange={this.onChangeBricks}
                                //value="Bricks"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Stone"
                                name="stone"
                                id="stone"
                                checked={this.state.stone} 
                                onChange={this.onChangeStone}
                                //value="Stone"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Concrete"
                                name="concrete"
                                id="concrete"
                                checked={this.state.concrete} 
                                onChange={this.onChangeConcrete}
                                //value="Concrete"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Metal"
                                name="metal"
                                checked={this.state.metal} 
                                onChange={this.onChangeMetal}
                                //id="metal"
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Wood"
                                name="wood"
                                id="wood"
                                checked={this.state.wood} 
                                onChange={this.onChangeWood}
                            />
                        </div>   
                        
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Glass"
                                name="glass"
                                id="glass"
                                checked={this.state.glass} 
                                onChange={this.onChangeGlass}
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Bamboo"
                                name="bamboo"
                                id="bomboo"
                                checked={this.state.bamboo} 
                                onChange={this.onChangeBamboo}
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Grass"
                                name="grass"
                                id="grass"
                                checked={this.state.grass} 
                                onChange={this.onChangeGrass}
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Marbal"
                                name="marbal"
                                id="marbal"
                                checked={this.state.marbal} 
                                onChange={this.onChangeMarbal}
                            />
                        </div>
                        <div className="col-2">
                            <Form.Check
                                type="checkbox"
                                label="Sand"
                                name="sand"
                                id="sand"
                                checked={this.state.sand} 
                                onChange={this.onChangeSand}
                            />
                        </div>
                    </div>
                </Form.Group>
               <div className="row">
                   <div className="col-6">
                        <Form.Group controlId="style">
                            <Form.Label>
                                Style
                            </Form.Label>
                                <Form.Control as="select" value={this.state.style} onChange={this.onChangeStyle}>
                                    <option value="modern">Modern</option>
                                    <option value="traditional">Traditional</option>
                                    <option value="contemporary">Contemporary</option>
                            </Form.Control>
                        </Form.Group>
                   </div>
                 {/*}  <div className="col-6">
                   <Form.Group>
                        <Form.File
                            className="position-relative"
                            //required
                            name="file"
                            label="Project Zip File"
                            value={this.state.projectFolder} 
                            onChange={this.onChangeFile}
                            id="validationFormik107"
                            feedbackTooltip
                        />
                    </Form.Group>
                  </div>*/}
                </div> 
               <div>
                  <Form.Group controlId="description">
                    <Form.Label>Project Description</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="3" 
                        type="text" 
                        value={this.state.description} 
                        onChange={this.onChangeDescription}
                      />
                  </Form.Group>
                  </div>
                
                <div className="row">
                    <span>If your project category is 'House' please fill these fields.</span>
                 </div>
                    <div className="row">
                    <div className="col-4">
                        <Form.Group controlId="storey">
                            <Form.Label>
                                Storey
                            </Form.Label>
                                <Form.Control as="select" value={this.state.storey} onChange={this.onChangeStorey}>
                                    <option value="single">Single Storey</option>
                                    <option value="two">Two Storey</option>
                                    <option value="three">Three Storey</option>
                                    <option value="more"> More than Three Storey</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-4">
                    <Form.Group controlId="bedRooms">
                            <Form.Label>
                                Bed Rooms
                            </Form.Label>
                                <Form.Control as="select" value={this.state.bedRooms} onChange={this.onChangeBedRooms}>
                                    <option value="oneBed">One Bed Room</option>
                                    <option value="twoBed">Two Bed Rooms</option>
                                    <option value="threeBed">Three Bed Rooms</option>
                                    <option value="moreBed"> More than Three Bed Rooms</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <Form.Group controlId="bathRooms">
                            <Form.Label>
                                Bath Rooms
                            </Form.Label>
                                <Form.Control as="select" value={this.state.bathRooms} onChange={this.onChangeBathRooms}>
                                    <option value="oneBath">One Bath Room</option>
                                    <option value="twoBath">Two Bath Rooms</option>
                                    <option value="threeBath">Three Bath Rooms</option>
                                    <option value="moreBath"> More than Three Bath Rooms</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>  
                <div className="row">
                    <Form.Group controlId="sustainability">
                        <Form.Check 
                            type="checkbox" 
                            name="sustainability"
                            checked={this.state.sustainability}
                            onChange={this.onChangeSustainability} 
                            label="This is a sustainable design." 
                        />
                    </Form.Group>
                </div>            
              <Button variant="primary" size="md" block="block" type="submit">
                 Save Changes
              </Button>
            </Form>
          </div>
          )  
    }
}
export default EditProject