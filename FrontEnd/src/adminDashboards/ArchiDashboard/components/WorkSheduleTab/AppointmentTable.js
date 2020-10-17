import React, { Component } from 'react'
import axios from 'axios';
import AppointmentRow from './AppointmentRow'

class AppointmentTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
          appointments: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/workSchedule/appointments')
          .then(res => {
            this.setState({
                appointments: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      DataTable() {
        return this.state.appointments.map((res, i) => {
          return <AppointmentRow obj={res} key={i} />;
        });
      }
    render() {
        return (
                <React.Fragment>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td><b>Day</b></td>
                                <td><b>Time Slot</b></td>
                                <td><b>Client</b> </td>
                                <td><b>Design Type</b></td>
                                <td><b>Design Category</b> </td>
                                <td><b>Basic Requirements</b> </td>
                                <td><b>Accept/ Cancel</b></td>   
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </table>
                </React.Fragment>         
        )
    }
}

export default AppointmentTable
