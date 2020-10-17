import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function SkillItems(props) {
  return (
    <React.Fragment>
        <ListGroup.Item>
          {props.obj.skills}
        </ListGroup.Item>  
    </React.Fragment>
  )
}

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/archi_dashboard_profile/skills/')
      .then(res => {
        this.setState({
          skills: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataList() {
    return this.state.skills.map((res, i) => {
      return <SkillItems obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Header>
                  <b><i className="fas fa-trophy" /> Top Skills  </b>
                </Card.Header>
                <ListGroup variant="flush">
                    {this.DataList()} 
                  </ListGroup>  
                </Card>      
            </React.Fragment>
        )
    }
}

export default Skills 
