import React, { Component } from 'react'
import axios from 'axios';
import SkillItem from './SkillItem'
//import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class SkillList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          skills: []
        };
      }

      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/profile/skills/')
          .then(res => {
            this.setState({
              skills: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      DataList() {
        return this.state.skills.map((res, i) => {
          return <SkillItem obj={res} key={i} />;
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

export default SkillList
