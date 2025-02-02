import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import axios from 'axios';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

function Users() {
    const [data, setData] = useState([]); //table data

    useEffect(() => { 
        axios.get("http://localhost:5000/admin-dashboard/users")
            .then(res => {               
                setData(res.data)
             })
             .catch(error=>{
                 console.log(error)
             })
      }, [])

    return (
      <MaterialTable
        icons={tableIcons}
        style={{marginBottom:'40px',boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)' }}
        title="USERS LIST"
        columns={[
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Proffesion', field: 'userType'},
          { title: 'Email', field: 'email'},
          { title: 'Contact Number', field: 'contactNumber'},
          { title: 'Payment Rate', field: 'payRate'},
          { title: 'Square Feet Rate', field: 'squareRate'},
          { title: 'Address', field: 'address'},
          { title: 'Province', field: 'province'},
          { title: 'Joined Date', field: 'date'}        
        ]}
        data={data}
             
        options={{
          exportButton: true
        }}
      />
    )
  }
  
 

export default Users
