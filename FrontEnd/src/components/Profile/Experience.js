import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function ExperienceItems(props) {
  return (
    <React.Fragment>
      <ListGroup.Item>
        <div className="row">
            {props.obj.work}   |  <span className="text-muted">{props.obj.place}</span>
        </div>
        <div className="row">
            <div className="col-6">
              Started Date: {props.obj.start_date}
            </div>
            <div className="col-6">
              Finished Date: {props.obj.end_date}
            </div>
          </div>
      </ListGroup.Item>  
    </React.Fragment>
  )
}

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      experience: [{
        work: '',
        place: '',
        start_date: '',
        end_date: ''
     }
    ]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi_dashboard_profile/experience/')
      .then(res => {
        this.setState({
            work: res.work,
            place: res.place,
            start_date: res.start_date,
            end_date: res.end_date
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataList() {
    return this.state.experience.map((res, i) => {
      return <ExperienceItems obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
               
                <Card>
                  <Card.Header>
                    <h5><b> <i class="fas fa-user-graduate"></i> Work Experience</b></h5>
                  </Card.Header>
                  <ListGroup variant="flush">
                    {this.DataList()} 
                  </ListGroup>  
                </Card> 
              
            </React.Fragment>
        )
    }
}

export default Experience
