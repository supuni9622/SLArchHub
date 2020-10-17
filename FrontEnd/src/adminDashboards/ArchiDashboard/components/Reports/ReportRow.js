import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ReportRow extends Component {
    constructor(props) {
        super(props);   
    }

    render(){
        return(
            <React.Fragment>
                <tbody>
                    <tr className="table-success">
                        <td>{this.props.obj.taskName}</td>
                        <td>{this.props.obj.clientName}</td>
                        <td>{this.props.obj.startDate}</td>
                        <td>{this.props.obj.endDate}</td>
                        <td>{this.props.obj.earnings}</td>
                        <td>{this.props.obj.paySoil}</td>
                        <td>{this.props.obj.payQuantity}</td>
                        <td>{this.props.obj.otherCosts}</td>
                        <td>{this.props.obj.payQuantity}</td>
                    </tr> 
                </tbody>
            </React.Fragment>

        )
    }

}

export default ReportRow