import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function PortfolioItems(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} id="projectCard">
        <Card.Img variant="top" src={props.obj.projectImage} />
        <Card.Body>
          <Card.Title>{props.obj.name}</Card.Title>
           {/* <Link id="edit" className="edit-link" to={"/edit-project/" + this.props.obj._id}>
              <i class="fas fa-edit"></i>   Preview
              </Link> */}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/projects/')
      .then(res => {
        this.setState({
          projects: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataGrid() {
    return this.state.projects.map((res, i) => {
      return <PortfolioItems obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
              <Card>
                  <Card.Header>
                    <h5><b> <i class="far fa-address-card"></i> Portfolios</b></h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="row" id="grid">
                       {this.DataGrid()} 
                    </div>  
                  </Card.Body>
                  <a href="#" className="btn btn-info btn-block">
                    View More
                  </a>  
                </Card> 
              


            </React.Fragment>
        )
    }
}

export default Portfolio