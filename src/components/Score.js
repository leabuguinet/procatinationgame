import React from 'react';
import { Typography } from '@mui/material';

const Score = ({userScore, botScore}) => {

    return(
        <>
        <Typography variant="h4">
            Your Score : {userScore}
        </Typography>

        <Typography variant="h4">
            Cat Score : {botScore}
        </Typography>
        </>
    )
}

export default Score; 