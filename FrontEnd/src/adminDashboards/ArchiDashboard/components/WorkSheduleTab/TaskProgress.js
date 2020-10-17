import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class TaskProgress extends Component {
    constructor(props) {
        super(props)

        this.onChangeClientBrief = this.onChangeClientBrief.bind(this);
        this.onChangeSoilTest = this.onChangeSoilTest.bind(this);
        this.onChangeSketchDesign = this.onChangeSketchDesign.bind(this);
        this.onChangeDiscussion = this.onChangeDiscussion.bind(this);
        this.onChangeRedesign = this.onChangeRedesign.bind(this);
        this.onChangeMCApproval = this.onChangeMCApproval.bind(this);
        this.onChangeBOQ = this.onChangeBOQ.bind(this);
        this.onChangeFinaleDesign = this.onChangeFinaleDesign.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            taskName: '',
            clientName: '',
            date: '',
            clientBrief: '',
            soilTest: '',
            sketchDesign: '',
            discussion: '',
            redesign:'',
            mcApproval: '',
            boq: '',
            finaleDesign: '',
            payAmount: '',
            payment: ''
        };
      }

      onChangeClientBrief(e) {
        this.setState({clientBrief: e.target.value})
      }

      onChangeSoilTest(e) {
        this.setState({soilTest: e.target.value})
      }

      onChangeSketchDesign(e) {
        this.setState({sketchDesign: e.target.value})
      }
      onChangeDiscussion(e) {
        this.setState({discussion: e.target.value})
      }
      onChangeRedesign(e) {
        this.setState({redesign: e.target.value})
      }
      onChangeMCApproval(e) {
        this.setState({mcApproval: e.target.value})
      }
      onChangeBOQ(e) {
        this.setState({boq: e.target.value})
      }
      onChangeFinaleDesign(e) {
        this.setState({finaleDesign: e.target.value})
      }

      onSubmit(e) {
        e.preventDefault()

        const taskProggressObject = {
            clientBrief: this.state.clientBrief,
            soilTest: this.state.soilTest,
            sketchDesign: this.state.sketchDesign,
            discussion: this.state.discussion,
            redesign: this.state.redesign,
            mcApproval: this.state.mcApproval,
            boq: this.state.boq,
            finaleDesign: this.state.finaleDesign
        }

        axios.post('http://localhost:5000/archi-dashboard/work-schedule/add-task-proggress', taskProggressObject)
        .then(res => console.log(res.data));

        this.setState({
            clientBrief: '',
            soilTest: '',
            sketchDesign: '',
            discussion: '',
            redesign:'',
            mcApproval: '',
            boq: '',
            finaleDesign: '',
            payAmount: '',
            payment: ''
        })
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/work-schedule/ongoing-tasks')
          .then(res => {
            this.setState({
              taskName: res.data,
              clientName: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

    render() {
        return (
            <div className="container-fluid">
              {/*}  <h4>{this.props.obj.taskName}</h4>
                <h4>{this.props.obj.clientName}</h4>
        <h4>{this.props.obj.date}</h4> */}

                <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="clientBrief">
                        <Form.Label column sm={6}>
                            Client Brief
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="select">
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
                            <Form.Control as="select">
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
                            <Form.Control as="select">
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
                            <Form.Control as="select">
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
                            <Form.Control as="select">
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
                            <Form.Control as="select">
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
                            <Form.Control as="select">
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
                            <Form.Control as="select">
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                                <option value="cancled">Cancled</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Col sm={6}>
                                <Button type="submit"> 
                                    Save 
                                </Button>
                            </Col>
                            <Col sm={6}>
                                <Button type="submit"> 
                                    Finish 
                                </Button>
                            </Col>
                        </Form.Group>
                </Form>
                
            </div>
        )
    }
}

export default TaskProgress
