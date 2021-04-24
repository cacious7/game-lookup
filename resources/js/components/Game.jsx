import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';

const Game = () => {

    return (
        <Card className='panel col-sm-12 game'>
            <p className='rating'>9</p>
            <div className='game-img'>
                <img src="stores/markusshoes/images/adidas alphabounce-1.jpg" alt="Game image"/>
            </div>
            <div className='game-info'>
                <h2 className='Title'>Game-Title</h2>
                <p className="date">Release Date: <span>DD/MM/YYYY</span></p>
                <p className="summary">
                    <span>[Summary]</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>
        </Card>
    );
}

export default Game;