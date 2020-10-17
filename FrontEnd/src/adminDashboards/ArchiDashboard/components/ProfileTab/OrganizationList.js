import React, { Component } from 'react'
import axios from 'axios';
import OrganizationItem from './OrganizationItem'
//import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class OrganizationList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          organizations: []
        };
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/organizations/')
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
          return <OrganizationItem obj={res} key={i} />;
        });
      }

    render() {
        return (
            <div>
                <ListGroup variant="flush">
                    {this.DataList()} 
                </ListGroup>  
            </div>
        )
    }
}

export default OrganizationList
