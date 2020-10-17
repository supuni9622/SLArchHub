import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import Pagination from '../Projects/Pagination'


function ServiceProviderItem(props) {
  return (
    <React.Fragment>
      <Card id="serviceProviderCard" style={{ padding: 15, marginTop: 10, backgroundColor:'white', border:'2px solid black'}}>
        <div className="row">
            <div className="col-sm-4 p-2">
                <Image src={props.obj.image} rounded />  
              </div>
              <div className="col-sm-4 p-2" style={{ color: 'black'}}>
                  <h5><b>{props.obj.firstName} {props.obj.lastName}</b></h5>
                <h5 className="card-title font-weight-bold">{props.obj.userType}</h5>
              </div>
              <div className="col-sm-4 p-2 justify-content-end align-items-center">
               {/* <p className="font-weight-bold">Payment Rate: {props.obj.payment_rate} </p>
                <p className="font-weight-bold">Rs per sqrt: {props.obj.rs_per_square} </p>*/}
                <ul className="list-unstyled list-inline rating mb-0">
                  <li className="list-inline-item mr-0">
                    <i className="fas fa-star amber-text" style={{ fontSize: 20}}> </i>
                  </li>
                  <li className="list-inline-item mr-0">
                    <i className="fas fa-star amber-text" style={{ fontSize: 20}}/>
                  </li>
                  <li className="list-inline-item mr-0">
                    <i className="fas fa-star amber-text" style={{ fontSize: 20}} />
                  </li>
                  <li className="list-inline-item mr-0">
                    <i className="fas fa-star amber-text " style={{ fontSize: 20}} />
                  </li>
                  <li className="list-inline-item">
                    <i className="fas fa-star-half-alt amber-text" style={{ fontSize: 20}}/>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">4.5 (413)</p>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-success btn-sm"
                  href="/"
                  target=" "
                >
                  >> Profile
                </a>
              {/*}  <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
              </p>*/}
              </div>
            </div>
      </Card>
    </React.Fragment>
  )
}

class serviceProviderCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceProviders: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users')
      .then(res => {
        this.setState({
          serviceProviders: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataGrid() {
    return this.state.serviceProviders.map((res, i) => {
      return <ServiceProviderItem obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>

                <div className="card-deck">
                    <div className="container">
                    {this.DataGrid()} 
                    </div>   
                               
                </div>
                <div style={{ margin: 20}}>
                <Pagination></Pagination>  
                </div> 
            </React.Fragment>
        )
    }
}

export default serviceProviderCard
