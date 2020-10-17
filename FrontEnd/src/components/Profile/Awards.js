import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function AwardItems(props) {
  return (
    <React.Fragment>
        <ListGroup.Item>
          {props.obj.honors}
        </ListGroup.Item>  
    </React.Fragment>
  )
}

class Awards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      honors: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/archi_dashboard_profile/honors/')
      .then(res => {
        this.setState({
          honors: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataList() {
    return this.state.honors.map((res, i) => {
      return <AwardItems obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Header>
                 <b> <i class="fas fa-award"></i> Achievements  </b>
                </Card.Header>
                <ListGroup variant="flush">
                    {this.DataList()} 
                  </ListGroup>  
                </Card>      
            </React.Fragment>
        )
    }
  }

export default Awards
