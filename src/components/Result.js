import { React } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Result = ({ userScore, setUserScore, botScore, setBotScore, statement, gameResult }) => {
     
    let resultText;
    let resetBotScore;
    let resetUserScore;


    if(gameResult === true){
        resultText = "The cat has let you win the game! You have the right to procastinate and not to:";
        resetBotScore = botScore - botScore;
        resetUserScore = userScore - 3;

    } else {
        resultText = "The cat has defeated you. You have to:";
        resetBotScore = botScore - 3;
        resetUserScore = userScore - userScore;
    }

    return (

        <Container sx={{
            padding: "3rem 0",
            justifyContent: 'center',
            textAlign: 'center',
            }}>

            <Typography variant="h4" component="h4" align="center"> {resultText} {statement} </Typography>

            <Link to="/">
                <Button variant="contained" size="large" sx={{
                    marginTop: '2rem',
                    textDecoration: 'none',
                    }}
                    onClick={() => {
                        setBotScore(resetBotScore);
                        setUserScore(resetUserScore);
                    }}
                    
                >Play again
                </Button>
            </Link>

        </Container>
    
    )
};

export default Result; 