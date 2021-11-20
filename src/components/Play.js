import React from 'react';
import { Link } from "react-router-dom";
import Score from './Score';

const Play = ({setUserChoice, statement, userScore, botScore}) => {

    return(
    
        
        <div className="play">

        <Score userScore={userScore} botScore={botScore}/>
        
        <h1>{statement}</h1>

        <Link to="/game">
          <div
            data-id="paper"
            onClick={(e) => setUserChoice(e.target.dataset.id)}
            className=""
          >Paper</div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={(e) => setUserChoice(e.target.dataset.id)}
            className=""
          >Scissors</div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={(e) => setUserChoice(e.target.dataset.id)}
            className=""
          >Rock</div>
        </Link>
      
    </div>

    )
};

export default Play; 