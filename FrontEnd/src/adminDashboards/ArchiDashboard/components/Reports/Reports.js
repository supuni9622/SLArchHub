import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReportRow from './ReportRow';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

function Reports() {
    const user = useSelector(state => state.user)

    const [Tasks, setTasks] = useState([])
    let variable = { owner: localStorage.getItem('userId') }

    useEffect(() => {
        axios.post('http://localhost:5000/archi-dashboard/work-schedule/ongoingProject', variable)
        .then(response => {
            if (response.data.success) {
                console.log(response.data.task)
                setTasks(response.data.task)
            } else {
                alert('Failed to get Favorite Projects')
            }
        })
    },[])

    var earn = Tasks.earnings;
    var earnInt = parseInt(earn, 10);
    var profit = (Tasks) => {
        for(let i=0; i <Tasks.length; i++ ){
          var total = Tasks[0].earnings;
          total += total[i]
        }
        return total;
        console.log(total)
       }

    const tableRow = Tasks.map((task, index) => {
      var profit= task.earnings - (task.paySoil + task.payQuantity + task.otherCosts);

      return <tr className="table-success">
                        <td>{task.taskName}</td>
                        <td>{task.clientName}</td>
                        <td>{task.startDate}</td>
                        <td>{task.endDate}</td>
                        <td>{task.earnings}</td>
                        <td>{task.paySoil}</td>
                        <td>{task.payQuantity}</td>
                        <td>{task.otherCosts}</td>
                        <td>{task.earnings - (task.paySoil + task.payQuantity + task.otherCosts)}</td>
                    </tr>

      })
  
        return (
                <div className="continer" style={{padding:"30px", boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', marginBottom:"60px", backgroundColor: 'white'}}>
                  <h2 style={{textAlign: 'center'}}> Monthly Report</h2>
              
                      <Card style={{padding:'20px', marging: '20px', marginBottom: '30px',backgroundColor:'white'}}>
                        <div className="row">
                          <div className="col-4">
                            <h6>Number of new projects started: </h6>
                          </div>
                           <div className="col-3">
                            <h6>10 </h6>
                          </div>
                        </div>
                         
                         <div className="row">
                          <div className="col-4">
                            <h6>Number of bookings recieved : </h6>
                          </div>
                           <div className="col-3">
                            <h6>10 </h6>
                          </div>
                        </div>
                      </Card>

                     <h4> Monthly Earnings and Payments </h4>
                    <table className="table table-bordered table-hover" style={{marginBottom: '30px'}}>
                        <thead>
                            <tr>
                                <td><b>Project</b></td>
                                <td><b>Client</b></td>
                                <td><b>Start Date</b> </td>
                                <td><b>End Date</b></td>
                                <td><b>Earnings (Rs.)</b> </td>
                                <td><b>Payment to Soil Engi. (Rs.)</b> </td>
                                <td><b>Payment to Q.S. (Rs.)</b></td> 
                                <td><b>Other Cost (Rs.)</b></td> 
                                <td><b>Profit (Rs.)</b></td> 
                            </tr>
                        </thead>
                        <tbody>
                             {tableRow}
                        </tbody>
                    </table>

                    <Card style={{padding:'20px', marging: '20px', backgroundColor:'white', marginBottom: '40px'}}>
                        <div className="row">
                          <div className="col-4">
                            <h6> Total profit: </h6>
                          </div>
                           <div className="col-3">
                            <h6>Rs.0.00 </h6>
                          </div>
                        </div>
                         <div className="row">
                          <div className="col-4">
                            <h6> - Monthly subscription fee:  </h6>
                          </div>
                           <div className="col-3">
                            <h6> Rs. 2400.00 </h6>
                          </div>
                        </div>
                         <div className="row">
                          <div className="col-4">
                            <h6> Net Profit: </h6>
                          </div>
                           <div className="col-3">
                            <h6> Rs. 0.00 </h6>
                          </div>
                        </div>
                      </Card>
                </div>         
        )
    }

export default Reports
