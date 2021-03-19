import React, { useState, useEffect } from 'react';
import { Container, CardColumns, Card, Form} from 'react-bootstrap';

const Home = () => {
    return ( 
        <Container className='col-12' >
            <Card className='panel col-sm-12' >
                <Card.Header>
                    <h2>Filter Results</h2>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='name'>
                            <Form.Label>Name (contains)</Form.Label>
                            <Form.Control type='text' name='name' placeholder='Text String'/>
                        </Form.Group>   
                        <Form.Group controlId='min-score'>
                            <Form.Label>Minimum Score</Form.Label>
                            <Form.Control type='text' name='min-score' placeholder='1-10'/>
                        </Form.Group>   
                    </Form>
                </Card.Body>
            </Card>
        </Container> 
    );
}

export default Home;