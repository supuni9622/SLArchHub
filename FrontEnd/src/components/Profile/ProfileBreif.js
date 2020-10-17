import React, { Component } from 'react'
import axios from 'axios';

import BookAppointment from '../BookAppointment/BookAppointment';

function ProfileBreifItem(props){
        return (
          <React.Fragment>
            <div className="col-4">
              <img
                src={props.obj.profile_photo}
                className="rounded float-left img-thumbnail my-md-3 mt-2 ml-md-1 mr-3"
                alt="..."
              />
                <div className="row">
                  <div className="col-6">
                    <h5 className="float-left my-md-2 mt-1 ml-md-1 mr-3">
                      <i className="far fa-dot-circle" /> Online
                  </h5>
                </div>
                <div className="col-6">
                  <h5 className="float-left my-md-2 mt-1 ml-md-1 mr-3">
                    <i className="fas fa-comment-dots" />
                  </h5>
                </div>
                <ul className="list-group list-group-flush" id="payment_data">
                  <li className="list-group-item">
                    <i className="fas fa-percent" /> Payment Rate : <span>{props.obj.payment_rate}</span>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-money-bill-alt" /> Rs per sqrt : <span>{props.obj.rs_per_square}</span>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-heart" /> Recommendations : <span>16</span>
                  </li>
                </ul>
                <div className="my-md-3 mx-md-3">
                  <BookAppointment></BookAppointment>
                </div>
                <div className="my-md-3 mx-md-3">
                  <button className="btn btn-info btn-md btn-block">Add Review</button>
                </div>
              </div>
            </div>
            <div className="col-8">
              <h2 className="my-md-3 mx-1 text-align-left p-2">
                <b>{props.obj.first_name} + {props.obj.last_name}</b>
              </h2>
              <h4 className="my-md-3 mx-1 text-align-left p-2">
                {props.obj.proffesions}
              </h4>
              <ul className="list-unstyled list-inline rating mb-0">
                <li className="list-inline-item my-md-2 mx-1 text-align-left p-2">
                  <a href="#" className="badge badge-danger">
                    4.5
                  </a>
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text"> </i>
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text" />
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text" />
                </li>
                <li className="list-inline-item mr-0">
                  <i className="fas fa-star amber-text" />
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-star-half-alt amber-text" />
                </li>
                <li className="list-inline-item">
                  <p className="text-muted"> (413 reviews)</p>
                </li>
              </ul>
                <div className="row my-md-3">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-3">
                        <span className="presentage">100%</span>
                      </div>
                      <div className="col-9">
                        <p className="quality">Job Completed</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <span className="presentage">94%</span>
                      </div>
                      <div className="col-9">
                        <p className="quality">On Time</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-3">
                        <span className="presentage">96%</span>
                      </div>
                      <div className="col-9">
                        <p className="quality">On Budget</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <span className="presentage"> 2%</span>
                      </div>
                      <div className="col-9">
                        <p className="quality">Job Repeat</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-align-justify my-md-3" id="about_con">
                  <p>
                    {props.obj.about}
                  </p>
                </div>
              </div>
            </React.Fragment>
        )
}

class ProfileBreif extends Component{
  constructor(props) {
    super(props)
    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/archi-dashboard/archi_dashboard_profile/')
      .then(res => {
        this.setState({
          profile: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  Data() {
    return this.state.profile.map((res, i) => {
      return <ProfileBreifItem obj={res} key={i} />;
    });
  }
    render() {
        return (
            <React.Fragment>
              <div className="row mb-2 pb-2" id="profile_main">
                <p>This is main content</p>
                {this.Data()} 
              </div>
            </React.Fragment>
        )
    }

}

export default ProfileBreif
