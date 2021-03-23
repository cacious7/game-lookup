import React from 'react';
import {Card} from 'react-bootstrap';

const Game = () => {
    return (
        <Card className='panel col-sm-12 game'>
            <div className='game-img'>
                <img src="stores/markusshoes/images/adidas alphabounce-1.jpg" alt="Game image"/>
            </div>
            <div className='game-info'>
                <div>
                    <p className='Title'>Game-Title</p>
                    <p className="date">Release date: <span>DD/MM/YY</span></p>
                    <p className="summary">
                        <span>[Summary]</span>
                        Lorem ipsum andf tho the shit from the stick and stuff. 
                    </p>
                </div>
                
            </div>
        </Card>
    );
}

export default Game;