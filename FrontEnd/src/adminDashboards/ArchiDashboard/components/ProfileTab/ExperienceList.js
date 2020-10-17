import React, { Component } from 'react'
import axios from 'axios';
import ExperienceItem from './ExperienceItem'
//import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class ExperienceList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          experience: [{
              work: '',
              place: '',
              start_date: '',
              end_date: ''
           }
          ]
        };
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/experience/')
          .then(res => {
            this.setState({
              work: res.work,
              place: res.place,
              start_date: res.start_date,
              end_date: res.end_date
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      DataList() {
        return this.state.experience.map((res, i) => {
          return <ExperienceItem obj={res} key={i} />;
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

export default ExperienceList
