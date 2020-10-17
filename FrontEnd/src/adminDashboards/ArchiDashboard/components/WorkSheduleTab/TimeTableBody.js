import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class TimeTableBody extends Component {
    constructor(props) {
        super(props);
        this.deleteTableBody = this.deleteTableBody.bind(this);
    }

    deleteTableBody() {
        axios.delete('http://localhost:5000/archi-dashboard/work-schedule/delete-time-table/' + this.props.obj._id)
            .then((res) => {
                console.log('Table Body successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tbody>
                            <tr className="table-success">
                                <td><b>Time Slot 1</b></td>
                                <td>{this.props.obj.mondayTime1}</td>
                                <td>{this.props.obj.tuesdayTime1}</td>
                                <td>{this.props.obj.wednusdayTime1}</td>
                                <td>{this.props.obj.thursdayTime1}</td>
                                <td>{this.props.obj.fridayTime1}</td>
                                <td>{this.props.obj.saturdayTime1}</td>
                                <td>{this.props.obj.sundayTime1}</td>
                            </tr> 
                            <tr className="table-warning">
                                <td><b>Time Slot 2</b></td>
                                <td>{this.props.obj.mondayTime2}</td>
                                <td>{this.props.obj.tuesdayTime2}</td>
                                <td>{this.props.obj.wednusdayTime2}</td>
                                <td>{this.props.obj.thursdayTime2}</td>
                                <td>{this.props.obj.fridayTime2}</td>
                                <td>{this.props.obj.saturdayTime2}</td>
                                <td>{this.props.obj.sundayTime2}</td>
                            </tr>
                            <tr className="table-success">
                                <td><b>Time Slot 3</b></td>
                                <td>{this.props.obj.mondayTime3}</td>
                                <td>{this.props.obj.tuesdayTime3}</td>
                                <td>{this.props.obj.wednusdayTime3}</td>
                                <td>{this.props.obj.thursdayTime3}</td>
                                <td>{this.props.obj.fridayTime3}</td>
                                <td>{this.props.obj.saturdayTime3}</td>
                                <td>{this.props.obj.sundayTime3}</td>
                            </tr>
                            <tr className="table-warning">
                                <td><b>Time Slot 4 </b></td>
                                <td>{this.props.obj.mondayTime4}</td>
                                <td>{this.props.obj.tuesdayTime4}</td>
                                <td>{this.props.obj.wednusdayTime4}</td>
                                <td>{this.props.obj.thursdayTime4}</td>
                                <td>{this.props.obj.fridayTime4}</td>
                                <td>{this.props.obj.saturdayTime4}</td>
                                <td>{this.props.obj.sundayTime4}</td>
                            </tr>
                            <tr className="table-success">
                                <td><b>Time Slot 5</b></td>
                                <td>{this.props.obj.mondayTime5}</td>
                                <td>{this.props.obj.tuesdayTime5}</td>
                                <td>{this.props.obj.wednusdayTime5}</td>
                                <td>{this.props.obj.thursdayTime5}</td>
                                <td>{this.props.obj.fridayTime5}</td>
                                <td>{this.props.obj.saturdayTime5}</td>
                                <td>{this.props.obj.sundayTime5}</td>
                            </tr>
                            <tr>
                                <td colspan="4">
                                    <Link className="edit-link" to={"/archi-dashboard/work-schedule/edit-time-slot/" + this.props.obj._id}>
                                    <i class="fas fa-edit"></i>   <b>Edit Time Slots</b>
                                    </Link>
                                </td>
                                <td colspan="4" >
                                     <Button id="delete" onClick={this.deleteTableBody} size="sm" variant="danger">
                                     <i class="fas fa-trash-alt"></i>   <b>Delete This Table Before Add Next Week Table</b>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
        );
    }
}

export default TimeTableBody