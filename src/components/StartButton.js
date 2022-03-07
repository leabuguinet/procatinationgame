import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const StartButton = (startGame) => {

    if(startGame.startGame === false){
        return(
  
            <Button disabled variant="contained" size="large">Play</Button>
        
        )
    } else {
        return(

            <Link to="/play">
                    <Button variant="contained" size="large">Play</Button>
            </Link>
     
        )
    }
    
}

export default StartButton; 