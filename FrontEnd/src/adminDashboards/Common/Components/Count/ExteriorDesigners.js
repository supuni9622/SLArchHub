import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class ExteriorDesigners extends Component {
    render() {
        return (
            <div>
               <Card style={{ boxShadow: '2px 6px 10px 0 rgba(0, 0, 0, 0.5), 2px 8px 24px 0 rgba(0, 0, 0, 0.5)', padding:'10px', margin: '10px', backgroundColor: 'black' }}>
                    <Card.Body>
                        <h2 style={{padding: '10px', margin: '15px', color:'white', fontWeight: 'bold', fontFamily:'cursive'}}>100</h2>
                        <h4 style={{padding: '10px', margin: '15px', color:'white', fontWeight: 'bold', fontFamily:'cursive'}}>EXTRIOR DESIGNERS</h4>
                    </Card.Body>
                </Card>  
            </div>
        )
    }
}

export default ExteriorDesigners
