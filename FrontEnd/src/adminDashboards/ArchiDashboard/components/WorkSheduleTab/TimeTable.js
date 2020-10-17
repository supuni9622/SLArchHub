import React, { Component } from 'react'
import axios from 'axios';
import TimeTableBody from './TimeTableBody'

class TimeTable extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            tableBody: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/work-schedule/time-table')
          .then(res => {
            this.setState({
               tableBody: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          }) 
        }
        DataBody() {
            return this.state.tableBody.map((res, i) => {
              return <TimeTableBody obj={res} key={i} />;
            });
          }
      

    render() {
        return (
                <React.Fragment>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td><b>#</b></td>
                                <td><b>Monday</b></td>
                                <td><b>Tuesday</b> </td>
                                <td><b>Wednusday</b></td>
                                <td><b>Thursday</b> </td>
                                <td><b>Friday</b> </td>
                                <td><b>Saturday</b></td>
                                <td><b>Sunday</b></td>    
                            </tr>
                        </thead>
                       {this.DataBody()}
                    </table>
                </React.Fragment>        
        )
    }
}

export default TimeTable