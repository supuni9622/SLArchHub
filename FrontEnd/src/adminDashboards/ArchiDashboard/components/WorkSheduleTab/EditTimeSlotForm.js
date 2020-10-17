import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
//import InputGroup from 'react-bootstrap/InputGroup';
//import MonthPicker from './MonthPicker';

//import "../../css/works.css";
import axios from 'axios';

class EditTimeSlotForm extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeMondayTime1 = this.onChangeMondayTime1.bind(this);
        this.onChangeMondayTime2 = this.onChangeMondayTime2.bind(this);
        this.onChangeMondayTime3 = this.onChangeMondayTime3.bind(this);
        this.onChangeMondayTime4 = this.onChangeMondayTime4.bind(this);
        this.onChangeMondayTime5 = this.onChangeMondayTime5.bind(this);
        this.onChangeTuesdayTime1 = this.onChangeTuesdayTime1.bind(this);
        this.onChangeTuesdayTime2 = this.onChangeTuesdayTime2.bind(this);
        this.onChangeTuesdayTime3 = this.onChangeTuesdayTime3.bind(this);
        this.onChangeTuesdayTime4 = this.onChangeTuesdayTime4.bind(this);
        this.onChangeTuesdayTime5 = this.onChangeTuesdayTime5.bind(this);
        this.onChangeWednusdayTime1 = this.onChangeWednusdayTime1.bind(this);
        this.onChangeWednusdayTime2 = this.onChangeWednusdayTime2.bind(this);
        this.onChangeWednusdayTime3 = this.onChangeWednusdayTime3.bind(this);
        this.onChangeWednusdayTime4 = this.onChangeWednusdayTime4.bind(this);
        this.onChangeWednusdayTime5 = this.onChangeWednusdayTime5.bind(this);
        this.onChangeThursdayTime1 = this.onChangeThursdayTime1.bind(this);
        this.onChangeThursdayTime2 = this.onChangeThursdayTime2.bind(this);
        this.onChangeThursdayTime3 = this.onChangeThursdayTime3.bind(this);
        this.onChangeThursdayTime4 = this.onChangeThursdayTime4.bind(this);
        this.onChangeThursdayTime5 = this.onChangeThursdayTime5.bind(this);
        this.onChangeFridayTime1 = this.onChangeFridayTime1.bind(this);
        this.onChangeFridayTime2 = this.onChangeFridayTime2.bind(this);
        this.onChangeFridayTime3 = this.onChangeFridayTime3.bind(this);
        this.onChangeFridayTime4 = this.onChangeFridayTime4.bind(this);
        this.onChangeFridayTime5 = this.onChangeFridayTime5.bind(this);
        this.onChangeSaturdayTime1 = this.onChangeSaturdayTime1.bind(this);
        this.onChangeSaturdayTime2 = this.onChangeSaturdayTime2.bind(this);
        this.onChangeSaturdayTime3 = this.onChangeSaturdayTime3.bind(this);
        this.onChangeSaturdayTime4 = this.onChangeSaturdayTime4.bind(this);
        this.onChangeSaturdayTime5 = this.onChangeSaturdayTime5.bind(this);
        this.onChangeSundayTime1 = this.onChangeSundayTime1.bind(this);
        this.onChangeSundayTime2 = this.onChangeSundayTime2.bind(this);
        this.onChangeSundayTime3 = this.onChangeSundayTime3.bind(this);
        this.onChangeSundayTime4 = this.onChangeSundayTime4.bind(this);
        this.onChangeSundayTime5 = this.onChangeSundayTime5.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          mondayTime1: '',mondayTime2: '',mondayTime3: '',mondayTime4: '',mondayTime5: '',
          tuesdayTime1: '',tuesdayTime2: '',tuesdayTime3: '',tuesdayTime4: '',tuesdayTime5: '',
          wednusdayTime1: '',wednusdayTime2: '',wednusdayTime3: '',wednusdayTime4: '',wednusdayTime5: '',
          thursdayTime1: '',thursdayTime2: '',thursdayTime3: '',thursdayTime4: '',thursdayTime5: '',
          fridayTime1: '',fridayTime2: '',fridayTime3: '',fridayTime4: '',fridayTime5: '',
          saturdayTime1: '',saturdayTime2: '', saturdayTime3: '', saturdayTime4: '', saturdayTime5: '',
          sundayTime1: '',sundayTime2: '',sundayTime3: '',sundayTime4: '',sundayTime5: ''
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/work-schedule/edit-time-slot/' + this.props.match.params.id)
          .then(res => {
            this.setState({
                mondayTime1: res.data.mondayTime1 ,mondayTime2: res.data.mondayTime2,mondayTime3: res.data.mondayTime3,mondayTime4: res.data.mondayTime4, mondayTime5: res.data.mondayTime5,
                tuesdayTime1: res.data.tuesdayTime1, tuesdayTime2: res.data.tuesdayTime2,tuesdayTime3: res.data.tuesdayTime3, tuesdayTime4: res.data.tuesdayTime4,tuesdayTime5: res.data.tuesdayTime5,
                wednusdayTime1: res.data.wednusdayTime1,wednusdayTime2: res.data.wednusdayTime2,wednusdayTime3: res.data.wednusdayTime3,wednusdayTime4: res.data.wednusdayTime4,wednusdayTime5: res.data.wednusdayTime5,
                thursdayTime1: res.data.thursdayTime1,thursdayTime2: res.data.thursdayTime2,thursdayTime3: res.data.thursdayTime3,thursdayTime4: res.data.thursdayTime4,thursdayTime5: res.data.thursdayTime5,
                fridayTime1: res.data.fridayTime1,fridayTime2: res.data.fridayTime2,fridayTime3: res.data.fridayTime3,fridayTime4: res.data.fridayTime4,fridayTime5: res.data.fridayTime5,
                saturdayTime1: res.data.saturdayTime1,saturdayTime2: res.data.saturdayTime2, saturdayTime3: res.data.saturdayTime3, saturdayTime4: res.data.saturdayTime4, saturdayTime5: res.data.saturdayTime5,
                sundayTime1: res.data.sundayTime1, sundayTime2: res.data.sundayTime2,sundayTime3: res.data.sundayTime3,sundayTime4: res.data.sundayTime4,sundayTime5: res.data.sundayTime5
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      onChangeMondayTime1(e) {
        this.setState({mondayTime1: e.target.value})
      }
      onChangeMondayTime2(e) {
        this.setState({mondayTime2: e.target.value})
      }
      onChangeMondayTime3(e) {
        this.setState({mondayTime3: e.target.value})
      }
      onChangeMondayTime4(e) {
        this.setState({mondayTime4: e.target.value})
      }
      onChangeMondayTime5(e) {
        this.setState({mondayTime5: e.target.value})
      }
      onChangeTuesdayTime1(e) {
        this.setState({tuesdayTime1: e.target.value})
      }
      onChangeTuesdayTime2(e) {
        this.setState({tuesdayTime2: e.target.value})
      }
      onChangeTuesdayTime3(e) {
        this.setState({tuesdayTime3: e.target.value})
      }
      onChangeTuesdayTime4(e) {
        this.setState({tuesdayTime4: e.target.value})
      }
      onChangeTuesdayTime5(e) {
        this.setState({tuesdayTime5: e.target.value})
      }
      onChangeWednusdayTime1(e) {
        this.setState({wednusdayTime1: e.target.value})
      }
      onChangeWednusdayTime2(e) {
        this.setState({wednusdayTime2: e.target.value})
      }
      onChangeWednusdayTime3(e) {
        this.setState({wednusdayTime3: e.target.value})
      }
      onChangeWednusdayTime4(e) {
        this.setState({wednusdayTime4: e.target.value})
      }
      onChangeWednusdayTime5(e) {
        this.setState({wednusdayTime5: e.target.value})
      }
      onChangeThursdayTime1(e) {
        this.setState({thursdayTime1: e.target.value})
      }
      onChangeThursdayTime2(e) {
        this.setState({thursdayTime2: e.target.value})
      }
      onChangeThursdayTime3(e) {
        this.setState({thursdayTime3: e.target.value})
      }
      onChangeThursdayTime4(e) {
        this.setState({thursdayTime4: e.target.value})
      }
      onChangeThursdayTime5(e) {
        this.setState({thursdayTime5: e.target.value})
      }
      onChangeFridayTime1(e) {
        this.setState({fridayTime1: e.target.value})
      }
      onChangeFridayTime2(e) {
        this.setState({fridayTime2: e.target.value})
      }
      onChangeFridayTime3(e) {
        this.setState({fridayTime3: e.target.value})
      }
      onChangeFridayTime4(e) {
        this.setState({fridayTime4: e.target.value})
      }
      onChangeFridayTime5(e) {
        this.setState({fridayTime5: e.target.value})
      }
      onChangeSaturdayTime1(e) {
        this.setState({saturdayTime1: e.target.value})
      }
      onChangeSaturdayTime2(e) {
        this.setState({saturdayTime2: e.target.value})
      }
      onChangeSaturdayTime3(e) {
        this.setState({saturdayTime3: e.target.value})
      }
      onChangeSaturdayTime4(e) {
        this.setState({saturdayTime4: e.target.value})
      }
      onChangeSaturdayTime5(e) {
        this.setState({saturdayTime5: e.target.value})
      }
      onChangeSundayTime1(e) {
        this.setState({sundayTime1: e.target.value})
      }
      onChangeSundayTime2(e) {
        this.setState({sundayTime2: e.target.value})
      }
      onChangeSundayTime3(e) {
        this.setState({sundayTime3: e.target.value})
      }
      onChangeSundayTime4(e) {
        this.setState({sundayTime4: e.target.value})
      }
      onChangeSundayTime5(e) {
        this.setState({sundayTime5: e.target.value})
      }
      onSubmit(e) {
        e.preventDefault()

        const timeObject = {
            mondayTime1: this.state.mondayTime1,
            mondayTime2: this.state.mondayTime2,
            mondayTime3: this.state.mondayTime3,
            mondayTime4: this.state.mondayTime4,
            mondayTime5: this.state.mondayTime5,
            tuesdayTime1: this.state.tuesdayTime1,
            tuesdayTime2: this.state.tuesdayTime2,
            tuesdayTime3: this.state.tuesdayTime3,
            tuesdayTime4: this.state.tuesdayTime4,
            tuesdayTime5: this.state.tuesdayTime5,
            wednusdayTime1: this.state.wednusdayTime1,
            wednusdayTime2: this.state.wednusdayTime2,
            wednusdayTime3: this.state.wednusdayTime3,
            wednusdayTime4: this.state.wednusdayTime4,
            wednusdayTime5: this.state.wednusdayTime5,
            thursdayTime1: this.state.thursdayTime1,
            thursdayTime2: this.state.thursdayTime2,
            thursdayTime3: this.state.thursdayTime3,
            thursdayTime4: this.state.thursdayTime4,
            thursdayTime5: this.state.thursdayTime5,
            fridayTime1: this.state.fridayTime1,
            fridayTime2: this.state.fridayTime2,
            fridayTime3: this.state.fridayTime3,
            fridayTime4: this.state.fridayTime4,
            fridayTime5: this.state.fridayTime5,
            saturdayTime1: this.state.saturdayTime1,
            saturdayTime2: this.state.saturdayTime2,
            saturdayTime3: this.state.saturdayTime3,
            saturdayTime4: this.state.saturdayTime4,
            saturdayTime5: this.state.saturdayTime5,
            sundayTime1: this.state.sundayTime1,
            sundayTime2: this.state.sundayTime2,
            sundayTime3: this.state.sundayTime3,
            sundayTime4: this.state.sundayTime4,
            sundayTime5: this.state.sundayTime5,
          };

          axios.put('http://localhost:5000/archi-dashboard/work-schedule/update-time-slot/' + this.props.match.params.id, timeObject)
          .then((res) => {
            console.log(res.data)
            console.log('Time Slot Table successfully updated')
          }).catch((error) => {
            console.log(error)
          })

        // Redirect to Time slots table
          this.props.history.push('/archi-dashboard/work-schedule/time-table')
        }
          

    render() {
        return (
            <div className="container form-wrapper" id="add">
                <h4>Add available time slots </h4>
                <Form id="TimeSlotFormForm" onSubmit={this.onSubmit}>
                  <div class="accordion" id="accordionExample">

                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Monday
                          </button>
                        </h2>
                      </div>
                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="mondayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                                <Form.Control type="time" value={this.state.mondayTime1} onChange={this.onChangeMondayTime1}/>
                              </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="mondayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                                <Form.Control type="time" value={this.state.mondayTime2} onChange={this.onChangeMondayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="mondayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                                <Form.Control type="time" value={this.state.mondayTime3} onChange={this.onChangeMondayTime3}/>
                              </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="mondayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                                <Form.Control type="time" value={this.state.mondayTime4} onChange={this.onChangeMondayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="mondayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                                <Form.Control type="time" value={this.state.mondayTime5} onChange={this.onChangeMondayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Tuesday
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="tuesdayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                              <Form.Control type="time" value={this.state.tuesdayTime1} onChange={this.onChangeTuesdayTime1}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="tuesdayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                              <Form.Control type="time" value={this.state.tuesdayTime2} onChange={this.onChangeTuesdayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="tuesdayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                                <Form.Control type="time" value={this.state.tuesdayTime3} onChange={this.onChangeTuesdayTime3}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="tuesdayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                              <Form.Control type="time" value={this.state.tuesdayTime4} onChange={this.onChangeTuesdayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="tuesdayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                              <Form.Control type="time" value={this.state.tuesdayTime5} onChange={this.onChangeTuesdayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
             
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Wednusday
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="wednusdayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                              <Form.Control type="time" value={this.state.wednusdayTime1} onChange={this.onChangeWednusdayTime1}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="wednusdayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                              <Form.Control type="time" value={this.state.wednusdayTime2} onChange={this.onChangeWednusdayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="wednusdayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                                <Form.Control type="time" value={this.state.wednusdayTime3} onChange={this.onChangeWednusdayTime3}/>
                              </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="wednusdayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                              <Form.Control type="time" value={this.state.wednusdayTime4} onChange={this.onChangeWednusdayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="wednusdayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                              <Form.Control type="time" value={this.state.wednusdayTime5} onChange={this.onChangeWednusdayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Thursday
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="thursdayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                              <Form.Control type="time" value={this.state.thursdayTime1} onChange={this.onChangeThursdayTime1}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="thursdayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                              <Form.Control type="time" value={this.state.thursdayTime2} onChange={this.onChangeThursdayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="thursdayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                              <Form.Control type="time" value={this.state.thursdayTime3} onChange={this.onChangeThursdayTime3}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="thursdayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                              <Form.Control type="time" value={this.state.thursdayTime4} onChange={this.onChangeThursdayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="thursdayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                              <Form.Control type="time" value={this.state.thursdayTime5} onChange={this.onChangeThursdayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingFive">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Friday
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="fridayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                              <Form.Control type="time" value={this.state.fridayTime1} onChange={this.onChangeFridayTime1}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="fridayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                              <Form.Control type="time" value={this.state.fridayTime2} onChange={this.onChangeFridayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="fridayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                              <Form.Control type="time" value={this.state.fridayTime3} onChange={this.onChangeFridayTime3}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="fridayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                              <Form.Control type="time" value={this.state.fridayTime4} onChange={this.onChangeFridayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="fridayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                              <Form.Control type="time" value={this.state.fridayTime5} onChange={this.onChangeFridayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingSix">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          Saturday
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="saturdayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                              <Form.Control type="time" value={this.state.saturdayTime1} onChange={this.onChangeSaturdayTime1}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="saturdayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                              <Form.Control type="time" value={this.state.saturdayTime2} onChange={this.onChangeSaturdayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="saturdayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                              <Form.Control type="time" value={this.state.saturdayTime3} onChange={this.onChangeSaturdayTime3}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="saturdayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                              <Form.Control type="time" value={this.state.saturdayTime4} onChange={this.onChangeSaturdayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="saturdayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                              <Form.Control type="time" value={this.state.saturdayTime5} onChange={this.onChangeSaturdayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card">
                    <div class="card-header" id="headingSeven">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          Sunday
                        </button>
                      </h2>
                    </div>
                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                      <div class="card-body">
                        <div className="row">
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="sundayTime1">
                              <Form.Label>Time Slot 1</Form.Label>
                              <Form.Control type="time" value={this.state.sundayTime1} onChange={this.onChangeSundayTime1}/>
                             </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="sundayTime2">
                              <Form.Label>Time Slot 2</Form.Label>
                              <Form.Control type="time" value={this.state.sundayTime2} onChange={this.onChangeSundayTime2}/>
                            </Form.Group>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="sundayTime3">
                              <Form.Label>Time Slot 3</Form.Label>
                              <Form.Control type="time" value={this.state.sundayTime3} onChange={this.onChangeSundayTime3}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="sundayTime4">
                              <Form.Label>Time Slot 4</Form.Label>
                              <Form.Control type="time" value={this.state.sundayTime4} onChange={this.onChangeSundayTime4}/>
                            </Form.Group>
                          </div> 
                          <div className='col-md-4 col-sm-6'>
                            <Form.Group controlId="sundayTime5">
                              <Form.Label>Time Slot 5</Form.Label>
                              <Form.Control type="time" value={this.state.sundayTime5} onChange={this.onChangeSundayTime5}/>
                            </Form.Group>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <Button variant="primary" size="md" block="block" type="submit">
                     Save Time Slot Changes
                  </Button>
               </Form>
            </div>
          )  
    }
}
export default EditTimeSlotForm






