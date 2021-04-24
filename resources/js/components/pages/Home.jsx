import React, {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import Filter from '../Filter';
import {Container} from 'react-bootstrap';
import Game from '../Game';
import axios from 'axios';

const Home = () => {
    const { status, data, isFetching, error  } = useQuery( 'games-doc', () => getGamesDoc() );
    const [gamesDoc, setGamesDoc] = useState(null);
    const [errorMessage, setErrorMessage] = useState(
        `There was an error fetching the games data, 
        please check your internet connection and try again!`
    );

    /**
     * Fetch the games document from the server
     * @return {Void}
     */
    const getGamesDoc = () => {
        axios('https://public.connectnow.org.uk/applicant-test/')
        .then( res => {
            const data = JSON.stringify(res.data);
            setGamesDoc(data);
        })
    }

    /**
     * Displays the game preview cards based on
     * the result from fetching of the game data/doc
     * @returns {Void}
     */
    const displayGames = () => {
        return isFetching ? 'Loading...' : error ? errorMessage : (<Game/>);
        //return (<Game/>);
    }

    return ( 
        <Container className='col-12 game-lookup-container' >
            <section className="filter">
                <Filter/>
            </section>
            <section className='game-list'>
                {displayGames()}
            </section>
        </Container> 
    );
}

export default Home;