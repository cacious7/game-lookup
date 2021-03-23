import React, {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import Filter from '../Filter';
import {Container} from 'react-bootstrap';
import Game from '../Game';

const Home = () => {
    const { status, data, isFetching, error  } = useQuery( 'games-doc', () => getGamesDoc() );
    const [gamesDoc, setGamesDoc] = useState(null);
    const [errorMessage, setErrorMessage] = useState(
        `There was an error fetching the games data, 
        please check your internet connection and try again!`
    );

    /**
     * Fetch the games document from the server
     */
    const getGamesDoc = async () => {
        const doc = await fetch('https://public.connectnow.org.uk/applicant-test/');
        setGamesDoc(doc);
        console.log(gamesDoc);
    }

    const displayGames = () => {
        return isFetching ? 'Loading...' : error ? errorMessage : (<Game/>);
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