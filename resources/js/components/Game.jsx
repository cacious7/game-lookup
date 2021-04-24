import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';

const Game = (props) => { 
    const [releaseDate, setReleaseDate] = useState(new Date(props.data.first_release_date)) ;

    return (
        <Card className='panel col-sm-12 game'>
            {/*.toFixed() returns a string, therefore, we add a + operator at the begining to conver it to a number*/}
            <p className='rating'>{+props.data.rating.toFixed()}</p>
            <div className='game-img'>
                <img src="stores/markusshoes/images/adidas alphabounce-1.jpg" alt="Game image"/>
            </div>
            <div className='game-info'>
                <h2 className='Title'>{props.data.name}</h2>
                <p className="date">Release Date: <span>{`${releaseDate.getDate()}/${releaseDate.getMonth()}/${releaseDate.getFullYear()}`}</span></p>
                <p className="summary">
                    <span>[Summary]</span> {props.data.summary}
                </p>
            </div>
        </Card>
    );
}

export default Game;