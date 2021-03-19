import React, { useState, useEffect } from 'react';
import { Container, CardColumns, Card, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { useQuery } from 'react-query';
import getHostUrl from '../../../../util/getHostUrl';

const Home = () => {
    return ( 
        <Container className='col-12' >
            <Card className='panel' >
                <Card.Header>
                    <h2>Filter Results</h2>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label for='name'>
                                Name(contains)
                            </Form.Label>
                            <input type='text' name='name' id='name' placeholder='Text String'/>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container> 
    );
}

export default Home;