import React from 'react';
import { Button, Container, Card, Form} from 'react-bootstrap';

const Filter = () => {
    return (
        <Card className='panel col-sm-12' >
            <Card.Header>
                <h3>Filter Results</h3>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId='name'>
                        <Form.Label>Name (contains)</Form.Label>
                        <Form.Control size='sm' type='text' name='name' placeholder='Text String'/>
                    </Form.Group>
                    <div className="tablet-styled-group">
                        <Form.Group className='min-score' controlId='min-score'>
                            <Form.Label>Minimum Score</Form.Label>
                            <Form.Control size='sm' type='text' name='min-score' placeholder='1-10'/>
                        </Form.Group>   
                        <Form.Group className='order-by' controlId="order-by">
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
                    </div>   
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Filter;