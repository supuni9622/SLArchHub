import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ProjectProposalItem(props) {
  return (
    <React.Fragment>
        <Card>
            <Card.Header>
                <h5><b> {props.obj.proposalName}  </b></h5>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-8">   
                        <div>
                            {props.obj.proposalDescription}
                        </div>
                        <div>
                            <p>Download your proposal here</p>
                            {props.obj.proposalFile}
                        </div>
                    </div>
                    <div className="col-4">
                        <h4>Rs. {props.obj.bidAmount} </h4> 
                        <h4>Rs. {props.obj.deliveryPeriod} </h4>              
                    </div> 
                </div> 
            </Card.Body> 
            <Card.Footer>
               <Button>Accept</Button>
               <Button>Reject</Button>
            </Card.Footer>
        </Card>    
    </React.Fragment>
  )
}

class ProjectProposal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      proposals: []
     }
    };

  componentDidMount() {
    axios.get('http://localhost:5000/bids:id/proposals/')
      .then(res => {
        this.setState({
          proposals: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }

  DataList() {
    return this.state.proposals.map((res, i) => {
      return <ProjectProposalItem obj={res} key={i} />;
    });
  }
    render() {
        return (
            <div className="container">
                <h6 className="text-muted">You haven't recieved any project proposal yet. </h6>
                {this.DataList()} 
            </div>
        )
    }
}

export default ProjectProposal
