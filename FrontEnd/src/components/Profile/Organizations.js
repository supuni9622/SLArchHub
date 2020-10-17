import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function OrganizationItems(props) {
  return (
    <React.Fragment>
        <ListGroup.Item>
          {props.obj.organizations}
        </ListGroup.Item>  
    </React.Fragment>
  )
}

class Organizations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      organizations: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/archi_dashboard_profile/organizations/')
      .then(res => {
        this.setState({
          organizations: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataList() {
    return this.state.organizations.map((res, i) => {
      return <OrganizationItems obj={res} key={i} />;
    });
  }
    render() {
        return (
          <React.Fragment>
          <Card className="mb-4" style={{ width: '18rem' }}>
            <Card.Header>
              <b> <i class="fas fa-users"></i> Organizations and Communities  </b>
            </Card.Header>
            <ListGroup variant="flush">
                {this.DataList()} 
              </ListGroup>  
            </Card>      
        </React.Fragment>
            
        )
    }
}

export default Organizations
