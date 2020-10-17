import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function PostedProjectItems(props) {
  return (
    <React.Fragment>
        <Card>
            <Card.Header>
                <h5><b> {props.obj.bidProject}  </b></h5>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-8">   
                        <h6 className="text-muted">{props.obj.biddingPurpose}</h6>
                        <h6 className="text-muted">{props.obj.designType}</h6>
                        <div>
                            {props.obj.description}
                        </div>
                    </div>
                    <div className="col-4">
                        <h4>Rs. {props.obj.budgetRate} </h4>              
                    </div> 
                </div> 
            </Card.Body> 
            <Card.Footer>
                <a href="/bids:id/proposals" class="btn btn-secondary btn-md active add-project" role="button" aria-pressed="true">
                    <i class="fas fa-laptop-house"></i>   See Proposals
                </a>
            </Card.Footer>
        </Card>    
    </React.Fragment>
  )
}

class PostedProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postedBids: []
     }
    };

  componentDidMount() {
    axios.get('http://localhost:5000/bids/')
      .then(res => {
        this.setState({
          postedBids: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }

  DataList() {
    return this.state.postedBids.map((res, i) => {
      return <PostedProjectItems obj={res} key={i} />;
    });
  }
    render() {
        return (
            <div className="container">
                <h6 className="text-muted">You are not posted any project yet. </h6>
                {this.DataList()} 
            </div>
        )
    }
}

export default PostedProjects
