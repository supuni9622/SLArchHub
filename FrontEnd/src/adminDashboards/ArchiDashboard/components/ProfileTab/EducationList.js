import React, { Component } from 'react'
import axios from 'axios';
import EducationItem from './EducationItem'
//import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class EducationList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          education: [{
              degree: '',
              collage: '',
              start_date: '',
              end_date: ''
           }
          ]
        };
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/education/')
          .then(res => {
            this.setState({
              degree: res.degree,
              collage: res.collage,
              start_date: res.start_date,
              end_date: res.end_date
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      DataList() {
        return this.state.education.map((res, i) => {
          return <EducationItem obj={res} key={i} />;
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

export default EducationList
