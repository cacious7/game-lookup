import React from 'react';
import { Button, Container, Card, Form} from 'react-bootstrap';

const Filter = () => {
    return (
        <Card className='panel col-sm-12' >
            <Card.Header>
                <h2>Filter Results</h2>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label>Name (contains)</Form.Label>
                        <Form.Control size='sm' type='text' name='name' placeholder='Text String'/>
                    </Form.Group>   
                    <Form.Group controlId='min-score'>
                        <Form.Label>Minimum Score</Form.Label>
                        <Form.Control size='sm' type='text' name='min-score' placeholder='1-10'/>
                    </Form.Group>   
                    <Form.Group controlId="order-by">
                        <Form.Label>Order By</Form.Label>
                        <div className='filter-select'>
                            <Button>up</Button>
                            <Form.Control size='sm' as="select" custom>
                            <option>Release Date</option>
                            <option>Score</option>
                            <option>Name</option>
                            </Form.Control>
                        </div>
                    </Form.Group>
                    <Button className='clear' id='clear'>Clear</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Filter;