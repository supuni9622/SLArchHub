import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

//import '../../css/work.css';
import axios from 'axios';

class EditTaskForm extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.onChangeClientName = this.onChangeClientName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTaskType = this.onChangeTaskType.bind(this);
        this.onChangeSustainability = this.onChangeSustainability.bind(this);
        this.onChangeDesignCategory = this.onChangeDesignCategory.bind(this);
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeMaterials = this.onChangeMaterials.bind(this);
        this.onChangeClientBrief = this.onChangeClientBrief.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeSpecialPoints = this.onChangeSpecialPoints.bind(this);
        this.onChangeArchitecturalProcess = this.onChangeArchitecturalProcess.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.onChangeChanges = this.onChangeChanges.bind(this);
        this.onChangeSoilEngineer = this.onChangeSoilEngineer.bind(this);
        this.onChangeQuantitySurveyer = this.onChangeQuantitySurveyer.bind(this);
        this.onChangeMC = this.onChangeMC.bind(this);
        this.onChangeConstructionParty = this.onChangeConstructionParty.bind(this);
        this.onChangeInteriorDesigner = this.onChangeInteriorDesigner.bind(this);
        this.onChangeLandscapeDesigner = this.onChangeLandscapeDesigner.bind(this);
        this.onChangeSoilTest = this.onChangeSoilTest.bind(this);
        this.onChangeBOQ = this.onChangeBOQ.bind(this);
        this.onChangeMCApproval = this.onChangeMCApproval.bind(this);
        this.onChangePlan = this.onChangePlan.bind(this);
        this.onChangePaySoil = this.onChangePaySoil.bind(this);
        this.onChangePayQuantity = this.onChangePayQuantity.bind(this);
        this.onChangePayWeb = this.onChangePayWeb.bind(this);
        this.onChangeOtherCosts = this.onChangeOtherCosts.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          taskName: '',
          clientName: '',
          date: '',
          taskType: '',
          sustainability: [],
          designCategory: '',
          area: '',
          materials: '',
          clientBrief: '',
          budget: '',
          location: '',
          special: '',
          architecturalProcess: '',
          paymentType: '',
          changes: '',
          soilEngineer: '',
          quantitySurveyer: '',
          mc: '',
          constructionParty: '',
          interiorDesigner: '',
          landscapeDesigner: '',
          soilTest: '',
          boq:'',
          mcApproval: '',
          plan: '',
          paySoil: '',
          payQuantity: '',
          payWeb: '',
          otherCosts: ''
        }
      }
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/work-schedule/edit-task/' + this.props.match.params.id)
          .then(res => {
            this.setState({
                taskName: res.data.taskName,
                clientName: res.data.clientName,
                date: res.data.date,
                taskType: res.data.taskType,
                sustainability: res.data.sustainability,
                designCategory: res.data.designCategory,
                area: res.data.area,
                materials: res.data.materials,
                clientBrief: res.data.clientBrief,
                budget: res.data.budget,
                location: res.data.location,
                special: res.data.special,
                architecturalProcess: res.data.architecturalProcess,
                paymentType: res.data.paymentType,
                changes: res.data.changes,
                soilEngineer: res.data.soilEngineer,
                quantitySurveyer: res.data.quantitySurveyer,
                mc: res.data.mc,
                constructionParty: res.data.constructionParty,
                interiorDesigner: res.data.interiorDesigner,
                landscapeDesigner: res.data.landscapeDesigner,
                soilTest: res.data.soilTest,
                boq:res.data.boq,
                mcApproval: res.data.mcApproval,
                plan: res.data.plan,
                paySoil: res.data.paySoil,
                payQuantity: res.data.payQuantity,
                payWeb: res.data.payWeb,
                otherCosts: res.data.otherCosts
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      onChangeTaskName(e) {
        this.setState({taskName: e.target.value})
      }
    
      onChangeClientName(e) {
        this.setState({clientName: e.target.value})
      }

      onChangeDate(e) {
        this.setState({date: e.target.value})
      }

      onChangeTaskType(e) {
        this.setState({taskType: e.target.value})
      }

      onChangeSustainability(e) {
       {/*} const target = e.target;
      var value = target.value; */}

        if(e.target.checked){
            this.setstate({sustainability: e.target.value});
        }else{
            this.setstate({sustainability: null});
        }
      }

      onChangeDesignCategory(e) {
        this.setState({designCategory: e.target.value})
      }

      onChangeArea(e) {
        this.setState({area: e.target.value})
      }

      onChangeMaterials(e) {
        this.setState({materials: e.target.value})
      }

      onChangeClientBrief(e) {
        this.setState({clientBrief: e.target.value})
      }

      onChangeBudget(e) {
        this.setState({budget: e.target.value})
      }

      onChangeLocation(e) {
        this.setState({location: e.target.value})
      }

      onChangeSpecialPoints(e) {
        this.setState({special: e.target.value})
      }

      onChangeArchitecturalProcess(e) {
        this.setState({architecturalProcess: e.target.value})
      }

      onChangePaymentType(e) {
        this.setState({paymentType: e.target.value})
      }

      onChangeChanges(e) {
        this.setState({changes: e.target.value})
      }

      onChangeSoilEngineer(e) {
        this.setState({soilEngineer: e.target.value})
      }

      onChangeQuantitySurveyer(e) {
        this.setState({quantitySurveyer: e.target.value})
      }

      onChangeMC(e) {
        this.setState({mc: e.target.value})
      }

      onChangeConstructionParty(e) {
        this.setState({constructionParty: e.target.value})
      }

      onChangeInteriorDesigner(e) {
        this.setState({interiorDesigner: e.target.value})
      }

      onChangeLandscapeDesigner(e) {
        this.setState({landscapeDesigner: e.target.value})
      }

      onChangeSoilTest(e) {
        this.setState({soilTest: e.target.value})
      }

      onChangeBOQ(e) {
        this.setState({boq: e.target.value})
      }

      onChangeMCApproval(e) {
        this.setState({mcApproval: e.target.value})
      }

      onChangePlan(e) {
        this.setState({plan: e.target.value})
      }

      onChangePaySoil(e) {
        this.setState({paySoil: e.target.value})
      }

      onChangePayQuantity(e) {
        this.setState({payQuantity: e.target.value})
      }

      onChangePayWeb(e) {
        this.setState({payW: e.target.value})
      }
      onChangeOtherCosts(e) {
        this.setState({otherCosts: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()

        const taskObject = {
            taskName: this.state.taskName,
            clientName: this.state.clientName,
            date: this.state.date,
            taskType: this.state.taskType,
            sustainability: this.state.sustainability,
            designCategory: this.state.designCategory,
            area: this.state.area,
            materials: this.state.materials,
            clientBrief: this.state.clientBrief,
            budget: this.state.budget,
            location: this.state.location,
            special: this.state.special,
            architecturalProcess: this.state.architecturalProcess,
            paymentType: this.state.paymentType,
            changes: this.state.changes,
            soilEngineer: this.state.soilEngineer,
            quantitySurveyer: this.state.quantitySurveyer,
            mc: this.state.mc,
            constructionParty: this.state.constructionParty,
            interiorDesigner: this.state.interiorDesigner,
            landscapeDesigner: this.state.landscapeDesigner,
            soilTest: this.state.soilTest,
            boq: this.state.boq,
            mcApproval: this.state.mcApproval,
            plan: this.state.plan,
            paySoil: this.state.paySoil,
            payQuantity: this.state.payQuantity,
            payWeb: this.state.payWeb,
            otherCosts: this.state.otherCosts

          };

          axios.put('http://localhost:5000/archi-dashboard/work-schedule/update-task/' + this.props.match.params.id, taskObject)
          .then((res) => {
            console.log(res.data)
            console.log('Task successfully updated')
          }).catch((error) => {
            console.log(error)
          })

        // Redirect to Tasks Table
          this.props.history.push('/archi-dashboard/work-schedule/ongoing-taks')
        }
          

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h3>Edit Task</h3>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group as={Row} controlId="taskName">
                            <Form.Label column sm={2}>
                                Task Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.taskName} 
                                    onChange={this.onChangeTaskName} 
                                    placeholder="Singhe Villa" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="clientName">
                            <Form.Label column sm={2}>
                                Client's Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.clientName} 
                                    onChange={this.onChangeClientName} 
                                    placeholder="Mr. Nimal Dasanayake" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="date">
                            <Form.Label column sm={2}>
                                Submition Date
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="date" 
                                    value={this.state.date} 
                                    onChange={this.onChangeDate} 
                                />
                            </Col>
                        </Form.Group>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                    Task Type
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Exterior Design"
                                    name="exteriorDesign"
                                    id="exteriorDesign"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Landscape Design"
                                    name="landscapeDesign"
                                    id="landscapeDesign"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                        <Form.Group as={Row} controlId="sustainability">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check 
                                    type="checkbox" 
                                    name="sustainability"
                                     
                                    value={this.state.sustainability}
                                    onChange={this.onChangeSustainability} 
                                    label="This should be a sustainable design." 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="designCategory">
                            <Form.Label column sm={2}>
                                Design Category
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select">
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="hotel">Hotel</option>
                                    <option value="restaurent">Restaurent</option>
                                    <option value="commercialBuilding">Commercial Building</option>
                                    <option value="indoorCourtyard">Indoor Courtyard</option>
                                    <option value="smallHomeGarden">Small Home Garden</option>
                                    <option value="largeGarden">Large Garden</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="area">
                            <Form.Label column sm={2}>
                                Floor Area
                            </Form.Label>
                            <Col sm={10}>
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
                            </Col>
                        </Form.Group>

                        <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                    Materials
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Check
                                    type="checkbox"
                                    label="Bricks"
                                    name="bricks"
                                    id="bricks"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Stone"
                                    name="stone"
                                    id="stone"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Concrete"
                                    name="concrete"
                                    id="concrete"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Metal"
                                    name="metal"
                                    id="metal"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Wood"
                                    name="wood"
                                    id="wood"
                                />
                            </Col>
                            <Col sm={5}>
                                <Form.Check
                                    type="checkbox"
                                    label="Glass"
                                    name="glass"
                                    id="glass"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Bamboo"
                                    name="bamboo"
                                    id="bomboo"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Grass"
                                    name="grass"
                                    id="grass"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Marbal"
                                    name="marbal"
                                    id="marbal"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Sand"
                                    name="sand"
                                    id="sand"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                        <Form.Group as={Row} controlId="clientBrief">
                            <Form.Label column sm={2}>
                                Client Brief
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    as="textarea" 
                                    value={this.state.clientBrief} 
                                    onChange={this.onChangeClientBrief} 
                                    rows="6" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="budget">
                            <Form.Label column sm={2}>
                                Client's Budget
                            </Form.Label>
                            <Col sm={10}>
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
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="location">
                            <Form.Label column sm={2}>
                                Location
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.location} 
                                    onChange={this.onChangeLocation} 
                                    placeholder="Location details" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="special">
                            <Form.Label column sm={2}>
                                Special Points
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    as="textarea" 
                                    value={this.state.special} 
                                    onChange={this.onChangeSpecialPoints}
                                    rows="6" 
                                />
                            </Col>
                        </Form.Group>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                    Architectural Process
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Responsible regarding only plan designing"
                                    name="onlyPlan"
                                    id="onlyPlan"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Responsible for the whole process till the finale product"
                                    name="notOnlyPlan"
                                    id="notOnlyPlan"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                    Payment Type
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Charge for square feets"
                                    name="perSqrt"
                                    id="perSqrt"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Some presentage of whole budget"
                                    name="presentage"
                                    id="presentage"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                        <Form.Group as={Row} controlId="changes">
                            <Form.Label column sm={2}>
                                Special Notes/ Changes
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    as="textarea"
                                    value={this.state.changes} 
                                    onChange={this.onChangeChanges}
                                    rows="6" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="soilEngineer">
                            <Form.Label column sm={2}>
                                Soil Engineer
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.soilEngineer} 
                                    onChange={this.onChangeSoilEngineer}
                                    placeholder="Name of the soil engineer in this project" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="quantitySurveyer">
                            <Form.Label column sm={2}>
                                Qunatity Surveyer
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.quantitySurveyer} 
                                    onChange={this.onChangeQuantitySurveyer}
                                    placeholder="Name of the quantity surveyer in this project" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="mc">
                            <Form.Label column sm={2}>
                                Municiple Council
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text"  
                                    value={this.state.mc} 
                                    onChange={this.onChangeMC}
                                    placeholder="Municiple councile of this area"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="constructionParty">
                            <Form.Label column sm={2}>
                                Construction Party
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text"
                                    value={this.state.constructionParty} 
                                    onChange={this.onChangeConstructionParty} 
                                    placeholder="Name of the responsible party of the construction process" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="interiorDesigner">
                            <Form.Label column sm={2}>
                                Interior Designer
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.interiorDesigner} 
                                    onChange={this.onChangeInteriorDesigner}
                                    placeholder="Name of the interior designer in this project"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="landscapeDesigner">
                            <Form.Label column sm={2}>
                                Landscape Designer
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text"
                                    value={this.state.landscapeDesigner} 
                                    onChange={this.onChangeLandscapeDesigner} 
                                    placeholder="Name of the landscape architect in this project" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="soilTest">
                            <Form.Label column sm={2}>
                                Soil Test Results
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text"
                                    value={this.state.soilTest} onChange={this.onChangeSoilTest} 
                                    placeholder="Soil test result file" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="boq">
                            <Form.Label column sm={2}>
                                BOQ
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text"
                                    value={this.state.boq} 
                                    onChange={this.onChangeBOQ} 
                                    placeholder="Bill of quantity file" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="mcApproval">
                            <Form.Label column sm={2}>
                                MC Approval
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text" 
                                    value={this.state.mcApproval} onChange={this.onChangeMCApproval}
                                    placeholder="MC approval file" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="plan">
                            <Form.Label column sm={2}>
                                Plan 
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                    type="text"
                                    value={this.state.plan} onChange={this.onChangePlan} 
                                    placeholder="Plan file" 
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="paySoil">
                            <Form.Label column sm={2}>
                                Soil Engineer's Pay Rate
                            </Form.Label>
                            <Col sm={10}>
                                <InputGroup>
                                    <FormControl
                                        placeholder="8"
                                        aria-label="budget"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.paySoil} 
                                        onChange={this.onChangePaySoil}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="payQuantity">
                            <Form.Label column sm={2}>
                                Quantity Surveyer's Pay Rate
                            </Form.Label>
                            <Col sm={10}>
                                <InputGroup>
                                    <FormControl
                                        placeholder="6"
                                        aria-label="payQuantity"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.payQuantity} 
                                        onChange={this.onChangePayQuantity}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="paySoil">
                            <Form.Label column sm={2}>
                                Subscription
                            </Form.Label>
                            <Col sm={10}>
                                <InputGroup>
                                    <FormControl
                                        placeholder="10"
                                        aria-label="budget"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.paySoil} 
                                        onChange={this.onChangePaySoil}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="otherCosts">
                            <Form.Label column sm={2}>
                                Other Costs
                            </Form.Label>
                            <Col sm={10}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="1000"
                                        aria-label="budget"
                                        aria-describedby="basic-addon2"
                                        type="number"
                                        value={this.state.otherCosts} 
                                        onChange={this.onChangeOtherCosts}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit"> 
                                    Edit Task
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
          </div>
          )  
    }
}
export default EditTaskForm






