import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function EducationItems(props) {
  return (
    <React.Fragment>
      <ListGroup.Item>
        <div className="row">
          {props.obj.degree}   |  <span className="text-muted">{props.obj.collage}</span>
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

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      education: [{
        degree: '',
        collage: '',
        start_date: '',
        end_date: ''
     }
    ]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/archi_dashboard_profile/education/')
      .then(res => {
        this.setState({
          degree: res.degree,
          collage: res.collage,
          start_date: res.start_date,
          end_date: res.end_date
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataList() {
    return this.state.education.map((res, i) => {
      return <EducationItems obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
               
                <Card>
                  <Card.Header>
                    <h5><b> <i class="fas fa-user-graduate"></i> Education and Qualifications</b></h5>
                  </Card.Header>
                  <ListGroup variant="flush">
                    {this.DataList()} 
                  </ListGroup>  
                </Card> 
              
            </React.Fragment>
        )
    }
}

export default Education
