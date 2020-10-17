import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

class Projects extends Component {
     constructor(props){
        super(props);

        // Declare states of query input and TVseries output result
        this.state = {
           projectCount : ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/counts/projects')
          .then(res => {
            this.setState({
              projectCount: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          }) 
      }
    render() {
        return (
            <div>
               <Card style={{boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', padding:'10px', margin: '10px', backgroundColor: 'black' }}>
                    <Card.Body>
                        <h2 style={{padding: '10px', margin: '15px', color:'white', fontWeight: 'bold', fontFamily:'cursive'}}>4</h2>
                        <h2 style={{padding: '10px', margin: '15px', color:'white', fontWeight: 'bold', fontFamily:'cursive'}}>PROJECTS</h2>
                    </Card.Body>
                </Card>  
            </div>
        )
    }
}

export default Projects
