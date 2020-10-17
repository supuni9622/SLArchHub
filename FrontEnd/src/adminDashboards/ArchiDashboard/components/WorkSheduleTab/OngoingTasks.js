import React, { Component } from 'react'
import axios from 'axios';
import TaskCard from './TaskCard'

 class OngoingTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tasks: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/work-schedule/ongoing-tasks')
          .then(res => {
            this.setState({
              tasks: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      DataList() {
        return this.state.tasks.map((res, i) => {
          return <TaskCard obj={res} key={i} />;
        });
      }
    render() {
        return (
                <div id="list">
                    {this.DataList()} 
                </div>         
        )
    }
}

export default OngoingTasks