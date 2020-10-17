import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import axios from 'axios';
import { Link } from 'react-router-dom';

class EditTask extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.onChangeClientName = this.onChangeClientName.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeTaskType = this.onChangeTaskType.bind(this);
        this.onChangeSustainability = this.onChangeSustainability.bind(this);
        this.onChangeDesignCategory = this.onChangeDesignCategory.bind(this);
       // this.onChangeIsWholeProcess = this.onChangeIsWholeProcess.bind(this);
       // 
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeMaterials1 = this.onChangeMaterials1.bind(this);
        this.onChangeMaterials2 = this.onChangeMaterials2.bind(this);
        this.onChangeMaterials3 = this.onChangeMaterials3.bind(this);
        this.onChangeMaterials4 = this.onChangeMaterials4.bind(this);
        this.onChangeMaterials5 = this.onChangeMaterials5.bind(this);
        this.onChangeClientBreif = this.onChangeClientBreif.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.onChangeSpecial = this.onChangeSpecial.bind(this);

        this.onChangeArchitecturalProcess = this.onChangeArchitecturalProcess.bind(this);
        this.onChangeSoilTest = this.onChangeSoilTest.bind(this);
        this.onChangeBOQ = this.onChangeBOQ.bind(this);
        this.onChangeMCApproval = this.onChangeMCApproval.bind(this);
        this.onChangePlan = this.onChangePlan.bind(this);
        this.onChangeChanges = this.onChangeChanges.bind(this);

        this.onChangeSoilEngineer = this.onChangeSoilEngineer.bind(this);
        this.onChangeQuantitySurveyer = this.onChangeQuantitySurveyer.bind(this);
        this.onChangeMC = this.onChangeMC.bind(this);
        this.onChangeConstructionParty = this.onChangeConstructionParty.bind(this);
        this.onChangeInteriorDesigner = this.onChangeInteriorDesigner.bind(this);
        this.onChangeLandscapeDesigner = this.onChangeLandscapeDesigner.bind(this);

        this.onChangeEarnings = this.onChangeEarnings.bind(this);
        this.onChangePaySoil = this.onChangePaySoil.bind(this);
        this.onChangePayQuantity = this.onChangePayQuantity.bind(this);
        this.onChangePayWeb = this.onChangePayWeb.bind(this);
        this.onChangeOtherCosts = this.onChangeOtherCosts.bind(this);
        this.onChangeProfit = this.onChangeProfit.bind(this);

        this.onChangeClientBreifStatus = this.onChangeClientBreifStatus.bind(this);
        this.onChangeSoilTestStatus = this.onChangeSoilTestStatus.bind(this);
        this.onChangeSketchDesignStatus = this.onChangeSketchDesignStatus.bind(this);
        this.onChangeDiscussionStatus = this.onChangeDiscussionStatus.bind(this);
        this.onChangeRedesignStatus = this.onChangeRedesignStatus.bind(this);
        this.onChangeMCApprovalStatus = this.onChangeMCApprovalStatus.bind(this);
        this.onChangeBOQStatus = this.onChangeBOQStatus.bind(this);
        this.onChangeFinaleDesignStatus = this.onChangeFinaleDesignStatus.bind(this);
        this.onChangePaymentStatus = this.onChangePaymentStatus.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          taskName: '',
          clientName: '',
          startDate: '',
          taskType: '',
          sustainability: '',
          designCategory: '',
         // isWholeProcess: ''
         area: '',
         materials1 : '',
         materials2 : '',
         materials3 : '',
         materials4 : '',
         materials5 : '',
         clientBrief : '',
         budget : '',
         location : '',
         paymentType : '',
         special : '',

         architecturalProcess : '',
         soilTest : '',
         boq : '',
         mcApproval : '',
         plan : '',
         changes : '',

         soilEngineer : '',
         quantitySurveyer : '',
         mc : '',
         constructionParty : '',
         interiorDesigner : '',
         landscapeDesigner : '',

         earnings : '',
         paySoil : '',
         payQuantity : '',
         payWeb : '',
         otherCosts : '',
         profit : '',

         clientBriefStatus : '',
         soilTestStatus : '',
         sketchDesignStatus : '',
         discussionStatus : '',
         redesignStatus : '',
         mcApprovalStatus : '',
         boqStatus : '',
         finaleDesignStatus : '',
         paymentStatus : '',
         endDate : ''
        }
      }

      componentDidMount() {
         axios.get('http://localhost:5000/archi-dashboard/work-schedule/edit-task/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              taskName: res.data.taskName,
              clientName: res.data.clientName,
              startDate: res.data.startDate,
              taskType: res.data.taskType,
              sustainability: res.data.sustainability,
              designCategory: res.data.designCategory,
              // isWholeProcess: ''
              
              area: res.data.area,
              materials1 : res.data.materials1,
              materials2 : res.data.materials2,
              materials3 : res.data.materials3,
              materials4 : res.data.materials4,
              materials5 : res.data.materials5,
              clientBrief : res.data.clientBrief,
              budget : res.data.budget,
              location : res.data.location,
              paymentType : res.data.paymentType,
              special : res.data.special,

              architecturalProcess : res.data.architecturalProcess,
              soilTest : res.data.soilTest,
              boq : res.data.boq,
              mcApproval : res.data.mcApproval,
              plan : res.data.plan,
              changes : res.data.changes,

              soilEngineer : res.data.soilEngineer,
              quantitySurveyer : res.data.quantitySurveyer,
              mc : res.data.mc,
              constructionParty : res.data.constructionParty,
              interiorDesigner : res.data.interiorDesigner,
              landscapeDesigner : res.data.landscapeDesigner,

              earnings : res.data.earnings,
              paySoil : res.data.paySoil,
              payQuantity : res.data.payQuantity,
              payWeb : res.data.payWeb,
              otherCosts : res.data.otherCosts,
              profit : res.data.profit,

              clientBriefStatus : res.data.clientBriefStatus,
              soilTestStatus : res.data.soilTestStatus,
              sketchDesignStatus : res.data.sketchDesignStatus,
              discussionStatus : res.data.discussionStatus,
              redesignStatus : res.data.redesignStatus,
              mcApprovalStatus : res.data.mcApprovalStatus,
              boqStatus : res.data.boqStatus,
              finaleDesignStatus : res.data.finaleDesignStatus,
              paymentStatus : res.data.paymentStatus,
              endDate : res.data.endDate
            })
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

      onChangeStartDate(e) {
        this.setState({startDate: e.target.value})
      }

      onChangeTaskType(e) {
        this.setState({taskType: e.target.value})
      }

      onChangeSustainability(e) {
        const target = e.target;
        const value = target.name === 'sustainability' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      onChangeDesignCategory(e) {
        this.setState({designCategory: e.target.value})
      }

     /* onChangeIsWholeProcess(e) {
        const target = e.target;
        const value = target.name === 'isWholeProcess' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }); 
      }*/

      onChangeArea(e) {
        this.setState({area: e.target.value})
      }

      onChangeMaterials1(e) {
        this.setState({materials1: e.target.value})
      }

      onChangeMaterials2(e) {
        this.setState({materials2: e.target.value})
      }

      onChangeMaterials3(e) {
        this.setState({materials3: e.target.value})
      }
      
      onChangeMaterials4(e) {
        this.setState({materials4: e.target.value})
      }

      onChangeMaterials5(e) {
        this.setState({materials5: e.target.value})
      }

      onChangeClientBreif(e) {
        this.setState({clientBrief: e.target.value})
      }

      onChangeBudget(e) {
        this.setState({budget: e.target.value})
      }

      onChangeLocation(e) {
        this.setState({location: e.target.value})
      }

      onChangePaymentType(e) {
        this.setState({paymentType: e.target.value})
      }

      onChangeSpecial(e) {
        this.setState({special: e.target.value})
      }

      onChangeArchitecturalProcess(e) {
        this.setState({architecturalProcess: e.target.value})
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

      onChangeEarnings(e) {
        this.setState({earnings: e.target.value})
      }

      onChangePaySoil(e) {
        this.setState({paySoil: e.target.value})
      }

      onChangePayQuantity(e) {
        this.setState({payQuantity: e.target.value})
      }

      onChangePayWeb(e) {
        this.setState({payWeb: e.target.value})
      }

      onChangeOtherCosts(e) {
        this.setState({otherCosts: e.target.value})
      }

      onChangeProfit(e) {
        this.setState({profit: e.target.value})
      }

      onChangeClientBreifStatus(e) {
        this.setState({clientBriefStatus: e.target.value})
      }

      onChangeSoilTestStatus(e) {
        this.setState({soilTestStatus: e.target.value})
      }

      onChangeSketchDesignStatus(e) {
        this.setState({sketchDesignStatus: e.target.value})
      }

      onChangeDiscussionStatus(e) {
        this.setState({discussionStatus: e.target.value})
      }

      onChangeRedesignStatus(e) {
        this.setState({redesignStatus: e.target.value})
      }

      onChangeMCApprovalStatus(e) {
        this.setState({mcApprovalStatus: e.target.value})
      }

      onChangeBOQStatus(e) {
        this.setState({boqStatus: e.target.value})
      }

      onChangeFinaleDesignStatus(e) {
        this.setState({finaleDesignStatus: e.target.value})
      }

      onChangePaymentStatus(e) {
        this.setState({paymentStatus: e.target.value})
      }

      onChangeEndDate(e) {
        this.setState({endDate: e.target.value})
      }

      onSubmit(e) {
        e.preventDefault()

        const taskObject = {
            taskName: this.state.taskName,
            clientName: this.state.clientName,
            startDate: this.state.startDate,
            taskType: this.state.taskType,
            sustainability: this.state.sustainability,
            designCategory: this.state.designCategory,
           // isWholeProcess: this.state.isWholeProcess,
           
            area: this.state.area,
            materials1 : this.state.materials1,
            materials2 : this.state.materials2,
            materials3 : this.state.materials3,
            materials4 : this.state.materials4,
            materials5 : this.state.materials5,
            clientBrief : this.state.clientBrief,
            budget : this.state.budget,
            location : this.state.location,
            paymentType : this.state.paymentType,
            special : this.state.special,
            
            architecturalProcess : this.state.architecturalProcess,
            soilTest : this.state.soilTest,
            boq : this.state.boq,
            mcApproval : this.state.mcApproval,
            plan : this.state.plan,
            changes : this.state.changes,

            soilEngineer : this.state.soilEngineer,
            quantitySurveyer : this.state.quantitySurveyer,
            mc : this.state.mc,
            constructionParty : this.state.constructionParty,
            interiorDesigner : this.state.interiorDesigner,
            landscapeDesigner : this.state.landscapeDesigner,

            earnings : this.state.earnings,
            paySoil : this.state.paySoil,
            payQuantity : this.state.payQuantity,
            payWeb : this.state.payWeb,
            otherCosts : this.state.otherCosts,
            profit : this.state.profit,

            clientBriefStatus : this.state.clientBriefStatus,
            soilTestStatus : this.state.soilTestStatus,
            sketchDesignStatus : this.state.sketchDesignStatus,
            discussionStatus : this.state.discussionStatus,
            redesignStatus : this.state.redesignStatus,
            mcApprovalStatus : this.state.mcApprovalStatus,
            boqStatus : this.state.boqStatus,
            finaleDesignStatus : this.state.finaleDesignStatus,
            paymentStatus : this.state.paymentStatus,
            endDate : this.state.endDate

          };

          axios.put('http://localhost:5000/archi-dashboard/work-schedule/update-task/' + this.props.match.params.id, taskObject)
            .then((res) => {
              console.log(res.data)
              console.log('Ongoing Project Details Successfully Updated')

              }).catch((error) => {
                console.log(error)
              })
            }   

    render() {
        return (
           <div className="container" style={{padding:"30px", boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', marginBottom:"60px"}}>
             <Form onSubmit={this.onSubmit}>
              <div className="row" style={{marginBottom: '15px'}}>
                <Button variant="info" size="md" type="submit" style={{margin: '15px', right: '0px'}}>
                     Save Changes
                 </Button>
                 <Link id="edit" className="edit-link" to={"/archi-dashboard/work-schedule"} style={{color:"blue", float: "right", right: '0px', margin: '15px'}}>
                    Back to Work schedule
                  </Link>
              </div>
              <div className="row" style={{marginBottom: '15px'}}>
                <div className="col-6">
                   <h5>Project Start</h5>
                   <Form.Group controlId="Name">
                          <Form.Label>Project Name</Form.Label>
                          <Form.Control type="text" value={this.state.taskName} onChange={this.onChangeTaskName}/>
                    </Form.Group>
                    <Form.Group controlId="ClientName">
                          <Form.Label>Client Name</Form.Label>
                          <Form.Control type="text" value={this.state.clientName} onChange={this.onChangeClientName}/>
                    </Form.Group>
                    <Form.Group controlId="StartDate">
                          <Form.Label>Starting Date</Form.Label>
                          <Form.Control type="date" value={this.state.startDate} onChange={this.onChangeStartDate}/>
                    </Form.Group>
                    <Form.Group controlId="TaskType">
                      <Form.Label>Project Type</Form.Label>
                        <Form.Control as="select" value={this.state.taskType} onChange={this.onChangeTaskType}>
                            <option value="null">Select Project Type</option>
                            <option value="Exterior-Design">Exterior Design</option>
                            <option value="Landscape-Design">Landscape Design</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Sustainability">
                      <Form.Check 
                        type="checkbox" 
                        name="sustainability"
                        checked={this.state.sustainability}
                        onChange={this.onChangeSustainability} 
                        label="This should be a sustainable design." 
                      />
                    </Form.Group>
                    <Form.Group controlId="DesignCategory">
                      <Form.Label>Design Category</Form.Label>
                      <Form.Control as="select" value={this.state.designCategory} onChange={this.onChangeDesignCategory}>
                        <option value="null">Select Category</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurent">Restaurent</option>
                        <option value="CommercialBuilding">Commercial Building</option>
                        <option value="Indoor Courtyard">Indoor Courtyard</option>
                        <option value="Small Home Garden">Small Home Garden</option>
                        <option value="Large Garden">Large Garden</option>
                      </Form.Control>
                    </Form.Group>
                </div>
                <div className="col-6">
                  <h5>Contributers</h5>
                  <Form.Group controlId="soilEngineer">
                    <Form.Label>Soil Engineer</Form.Label>
                      <Form.Control type="text" value={this.state.soilEngineer} onChange={this.onChangeSoilEngineer}/>
                    </Form.Group>
                    <Form.Group controlId="quantitySurveyer">
                    <Form.Label>Quantity Surveyer</Form.Label>
                      <Form.Control type="text" value={this.state.quantitySurveyer} onChange={this.onChangeQuantitySurveyer}/>
                    </Form.Group>
                    <Form.Group controlId="mc">
                    <Form.Label>Municiple Council</Form.Label>
                      <Form.Control type="text" value={this.state.mc} onChange={this.onChangeMC}/>
                    </Form.Group>
                    <Form.Group controlId="constructionParty">
                    <Form.Label>Construction Party</Form.Label>
                      <Form.Control type="text" value={this.state.constructionParty} onChange={this.onChangeConstructionParty}/>
                    </Form.Group>
                    <Form.Group controlId="interiorDesigner">
                    <Form.Label>Interior Designer</Form.Label>
                      <Form.Control type="text" value={this.state.interiorDesigner} onChange={this.onChangeInteriorDesigner}/>
                    </Form.Group>
                    <Form.Group controlId="landscapeDesigner">
                    <Form.Label>Landscape Designer</Form.Label>
                      <Form.Control type="text" value={this.state.landscapeDesigner} onChange={this.onChangeLandscapeDesigner}/>
                    </Form.Group>
                </div>
                </div>
               
                 <h5 style={{marginBottom: '10px'}}>Project Details</h5>
                  <div className="row" style={{marginBottom: '15px'}}>
                    <div className="col-6">
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
                     <Form.Group controlId="PaymentType">
                      <Form.Label>Payment Type</Form.Label>
                        <Form.Control as="select" value={this.state.paymentType} onChange={this.onChangePaymentType}>
                          <option value="null">Select Payment Type</option>
                          <option value="Pay for Sqft">Pay fro Sqft</option>
                          <option value="n% of Total Budget">n% of Total Budget</option>
                        </Form.Control>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                      <Card style={{ width: '18rem' }}>
                        <Card.Header style={{fontWeight:'bold'}}>Materials</Card.Header>
                          <ListGroup variant="flush">
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.materials1} onChange={this.onChangeMaterials1}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.materials2} onChange={this.onChangeMaterials2}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.materials3} onChange={this.onChangeMaterials3}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.materials4} onChange={this.onChangeMaterials4}/>
                            </ListGroup.Item>
                            <ListGroup.Item style={{color:'black'}}>
                                <Form.Control type="text" value={this.state.materials5} onChange={this.onChangeMaterials5}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </div>
                  </div>
                  
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{marginBottom: '15px'}}>
                      <Form.Label style={{fontWeight:'bold'}}>Client Breif</Form.Label>
                      <Form.Control as="textarea" rows="8" value={this.state.clientBrief} onChange={this.onChangeClientBreif}/>
                    </Form.Group>
                   
                    <Form.Group controlId="Location" style={{marginBottom: '15px'}}>
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" value={this.state.location} onChange={this.onChangeLocation}/>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea2" style={{marginBottom: '15px'}}>
                      <Form.Label style={{fontWeight:'bold'}}>Special Notes</Form.Label>
                      <Form.Control as="textarea" rows="4" value={this.state.special} onChange={this.onChangeSpecial}/>
                    </Form.Group>

                  <div className="row" style={{marginBottom: '10px'}}>
                    <div className = "col-6">
                      <h5> Proggress Status</h5>
                    </div>
                    <div className="col-6">
                      <h5>Earnings and Payments</h5>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom: '15px'}}>
                    <div className="col-6">
                      <Form.Group as={Row} controlId="clientBrief">
                        <Form.Label column sm={6}>
                            Client Brief
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.clientBriefStatus} onChange={this.onChangeClientBreifStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="soilTest">
                        <Form.Label column sm={6}>
                            Soil Test
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.soilTestStatus} onChange={this.onChangeSoilTestStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                     <Form.Group as={Row} controlId="sketchDesign">
                        <Form.Label column sm={6}>
                            Sketch Designing
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.sketchDesignStatus} onChange={this.onChangeSketchDesignStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                     <Form.Group as={Row} controlId="discussion">
                        <Form.Label column sm={6}>
                            Discussion
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.discussionStatus} onChange={this.onChangeDiscussionStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                     <Form.Group as={Row} controlId="redesign">
                        <Form.Label column sm={6}>
                            Redesigning
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.redesignStatus} onChange={this.onChangeRedesignStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="mcApproval">
                        <Form.Label column sm={6}>
                            MC Approval
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.mcApprovalStatus} onChange={this.onChangeMCApprovalStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="boq">
                        <Form.Label column sm={6}>
                            BOQ
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.boqStatus} onChange={this.onChangeBOQStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="finaleDesign">
                        <Form.Label column sm={6}>
                            Plan Finalizing
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.finaleDesignStatus} onChange={this.onChangeFinaleDesignStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="paymentStatus">
                        <Form.Label column sm={6}>
                            Payment
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select" value={this.state.paymentStatus} onChange={this.onChangePaymentStatus}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                     <Form.Group controlId="EndDate">
                          <Form.Label>Ending Date</Form.Label>
                          <Form.Control type="date" value={this.state.endDate} onChange={this.onChangeEndDate}/>
                    </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group controlId="budget">
                        <Form.Label>
                          Earnings
                      </Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>Rs.</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="120,000"
                          aria-label="earnings"
                          aria-describedby="basic-addon2"
                          type="number"
                          value={this.state.earnings} 
                          onChange={this.onChangeEarnings}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="paySoil">
                      <Form.Label>
                        Payment to Soil Engineer
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
                          value={this.state.paySoil} 
                          onChange={this.onChangePaySoil}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="budget">
                      <Form.Label>
                        Payment to Quantity Surveyer
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
                          value={this.state.payQuantity} 
                          onChange={this.onChangePayQuantity}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="budget">
                      <Form.Label>
                        Other Costs
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
                          value={this.state.otherCosts} 
                          onChange={this.onChangeOtherCosts}
                        />
                        <InputGroup.Append>
                          <InputGroup.Text id="basic-addon2">.00</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    </div>
               </div>
             </Form>
           </div>
          )  
  }
}

  
export default EditTask;







