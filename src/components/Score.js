import React from 'react';

const Score = ({userScore, botScore}) => {

    return(
        <div>
            <h1>Your Score : {userScore}</h1>
            <h1>Bot Score : {botScore}</h1>
        </div>
    )
}

export default Score; 