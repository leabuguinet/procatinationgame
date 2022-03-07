import React from 'react';
import { Link } from "react-router-dom";
import Score from './Score';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import HandCard from './HandCard';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/system';

//images
import rockhand from '../assets/images/rockhand.png';
import paperhand from '../assets/images/paperhand.png';
import scissorshand from '../assets/images/scissorshand.png';
import { useEffect } from 'react';


const Play = ({setUserChoice, statement, userScore, botScore, setBotChoice, botChoice}) => {

    const theme = useTheme();

    //Get the bot choices once
    useEffect(() => {
        const choices = ["rockpaw", 'paperpaw', 'scissorspaw'];
        setBotChoice(choices[Math.floor(Math.random() * 3)])
    })
   

    return(

    <Box sx={{
            bgcolor: theme.palette.tertiary.main,
            paddingBottom: 4,
            display: 'flex', 
    }}>

        <Container>
            
            <Box 
            sx={{
                textalign: "center",
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center", 
                padding: 0,
            }}>
                <Score userScore={userScore} botScore={botScore}/>

                <Typography component="p" variant='h5' 
                    sx={{
                        padding: '1.5rem'
                }}>
                    Choose your hand:
                </Typography>

                <Link to="/game">
                    <HandCard setUserChoice={setUserChoice} imgSrc={rockhand} dataId="rock" />
                </Link>

                <Link to="/game">
                    <HandCard setUserChoice={setUserChoice} imgSrc={paperhand} dataId="paper" />
                </Link>
                
                <Link to="/game">
                    <HandCard setUserChoice={setUserChoice} imgSrc={scissorshand} dataId="scissors"/>
                </Link>

            </Box>

            
        </Container>

      
    </Box>

    )
};

export default Play; 