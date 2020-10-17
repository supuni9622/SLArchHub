import React, { Component } from 'react'
import axios from 'axios';
import HonorsItem from './HonorsItem'
import ListGroup from 'react-bootstrap/ListGroup'

class HonorsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          honors: []
        };
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/honors/')
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
          return <HonorsItem obj={res} key={i} />;
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

export default HonorsList
