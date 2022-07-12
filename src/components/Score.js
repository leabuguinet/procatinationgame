import React from 'react';
import { Typography } from '@mui/material';

const Score = ({userScore, botScore}) => {

    return(
        
        <Typography variant="h4" component="h4">
            You {userScore} - {botScore} Cat
        </Typography>

    )
}

export default Score; 