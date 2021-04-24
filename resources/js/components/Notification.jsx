import React from 'react';
import {Card} from 'react-bootstrap';

const Notification = props => {
    return (
        <Card 
        bg={props.variant.toLowerCase()}
        text={props.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        className='notification' 
        >
            <Card.Body>
                <Card.Title>{props.type.toUpperCase()}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Notification;