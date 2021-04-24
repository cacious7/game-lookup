import React, {useState, useEffect} from 'react';
import {useQuery} from 'react-query';
import Filter from '../Filter';
import {Container} from 'react-bootstrap';
import Game from '../Game';
import Notification from '../Notification';
import axios from 'axios';

const Home = () => {
    const { status, data, isFetching, error  } = useQuery( 'games-doc', () => getGamesDoc() );
    const [isError, setIsError] = useState(false);
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
            console.log(res.data);
            const data = res.data;
            setGamesDoc(data);
        })
        .catch( err =>{
            setIsError(true);
            setErrorMessage(err.message);
        } );
    }

    /**
     * Displays the game preview cards based on
     * the result from fetching of the game data/doc
     * @returns {Object}
     */
    const displayGames = () => {
        console.log('error => ', error, 'isFetching => ', isFetching, 'doc => ', gamesDoc );
        let result = null;
        if(error || isError){
            result = (<Notification type='notice' content={errorMessage} variant='danger' />);
        }else if(isFetching || status == 'loading'){
            result = (<Notification type='notice' content='loading...' variant='primary' />);
        }else if(gamesDoc) {
            console.log('games doc => ', gamesDoc);
            const gameList = gamesDoc.map( game => {
                return (<Game data={game} key={game.id} />);
            } );
            
            result = gameList;
        }else if(!isFetching){
            result = (<Notification type='notice' content='One Moment Please...' variant='info' />);
        }else{
            result = (<Notification type='notice' content="OOps! Couldn't fetch the games..." variant='danger' />);
        }

        return result;
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