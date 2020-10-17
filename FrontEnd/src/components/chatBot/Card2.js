import React from 'react'
import Card from 'react-bootstrap/Card';

function ArchiCards(props) {
    return (
        <Card style={{ width: '18rem', margin:'1rem' }}>
               
            <Card.Img variant="top"
                src={props.cardInfo2.fields.image.stringValue} /> 
                <Card.Body>
                     <Card.Title>{props.cardInfo2.fields.name.stringValue}</Card.Title>
                </Card.Body>
            </Card>
    )
}

export default ArchiCards
