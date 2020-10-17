import React from 'react'
import Card from 'react-bootstrap/Card';

function CardComponent(props) {
    return (
        <Card style={{ width: '18rem', margin:'1rem' }}>
             <a target="_blank" rel="noopener noreferrer" href={props.cardInfo.fields.link.stringValue}>  
               
            <Card.Img variant="top"
                alt={props.cardInfo.fields.description.stringValue} 
                src={props.cardInfo.fields.image.stringValue} /> </a>
                <Card.Body>
                     <Card.Title>{props.cardInfo.fields.title.stringValue}</Card.Title>
                        <Card.Text>
                        {props.cardInfo.fields.description.stringValue}
                    </Card.Text> 
                </Card.Body>
            </Card>
    )
}

export default CardComponent
