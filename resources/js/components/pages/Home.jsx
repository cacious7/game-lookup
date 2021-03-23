import React from 'react';
import Filter from '../Filter';
import {Container} from 'react-bootstrap';
import Game from '../Game';

const Home = () => {
    return ( 
        <Container className='col-12 game-lookup-container' >
            <section className="filter">
                <Filter/>
            </section>
            <section className='game-list'>
                <Game/>
            </section>
        </Container> 
    );
}

export default Home;