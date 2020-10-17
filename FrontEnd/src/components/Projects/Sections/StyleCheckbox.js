import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse

function StyleCheckbox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }

    const renderCheckboxLists = () => 
    props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleToggle(value.name)}
                type="checkbox"
                checked={Checked.indexOf(value.name) === -1 ? false : true}
            />&nbsp;&nbsp;
            <span style={{color:'black'}}>{value.name}</span> <br></br>
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Style" key="1" style={{color:'black', fontWeight:'bold'}}>
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default StyleCheckbox
