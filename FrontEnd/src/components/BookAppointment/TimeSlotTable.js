import React, { Component } from 'react'
import axios from 'axios';

function TimeSlots(props) {
  return (
    <React.Fragment>
       <tbody>
            <tr className="table-success">
                <td><b>Time Slot 1</b></td>
                <td>{props.obj.mondayTime1}</td>
                <td>{props.obj.tuesdayTime1}</td>
                <td>{props.obj.wednusdayTime1}</td>
                <td>{props.obj.thursdayTime1}</td>
                <td>{props.obj.fridayTime1}</td>
                <td>{props.obj.saturdayTime1}</td>
                <td>{props.obj.sundayTime1}</td>
            </tr> 
            <tr className="table-warning">
                <td><b>Time Slot 2</b></td>
                <td>{props.obj.mondayTime2}</td>
                <td>{props.obj.tuesdayTime2}</td>
                <td>{props.obj.wednusdayTime2}</td>
                <td>{props.obj.thursdayTime2}</td>
                <td>{props.obj.fridayTime2}</td>
                <td>{props.obj.saturdayTime2}</td>
                <td>{props.obj.sundayTime2}</td>
            </tr>
            <tr className="table-success">
                <td><b>Time Slot 3</b></td>
                <td>{props.obj.mondayTime3}</td>
                <td>{props.obj.tuesdayTime3}</td>
                <td>{props.obj.wednusdayTime3}</td>
                <td>{props.obj.thursdayTime3}</td>
                <td>{props.obj.fridayTime3}</td>
                <td>{props.obj.saturdayTime3}</td>
                <td>{props.obj.sundayTime3}</td>
            </tr>
            <tr className="table-warning">
                <td><b>Time Slot 4 </b></td>
                <td>{props.obj.mondayTime4}</td>
                <td>{props.obj.tuesdayTime4}</td>
                <td>{props.obj.wednusdayTime4}</td>
                <td>{props.obj.thursdayTime4}</td>
                <td>{props.obj.fridayTime4}</td>
                <td>{props.obj.saturdayTime4}</td>
                <td>{props.obj.sundayTime4}</td>
            </tr>
            <tr className="table-success">
                <td><b>Time Slot 5</b></td>
                <td>{props.obj.mondayTime5}</td>
                <td>{props.obj.tuesdayTime5}</td>
                <td>{props.obj.wednusdayTime5}</td>
                <td>{props.obj.thursdayTime5}</td>
                <td>{props.obj.fridayTime5}</td>
                <td>{props.obj.saturdayTime5}</td>
                <td>{props.obj.sundayTime5}</td>
            </tr>
        </tbody>
    </React.Fragment>
  )
}

class TimeSlotTable extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            tableBody: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/archi-dashboard/work-schedule/time-table/')
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
              return <TimeSlots obj={res} key={i} />;
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

export default TimeSlotTable