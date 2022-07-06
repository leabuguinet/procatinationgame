import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HandCard from './HandCard';
import { Box } from '@mui/system';
import Score from './Score';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Game = ({ botChoice, userChoice, userScore, setUserScore, botScore, setBotScore, statement }) => {
        
    const [tourResult, setTourResult] = useState("");

    const theme = useTheme();

    //const [counter, setCounter] = useState(3);

    useEffect(() => {

        if(userChoice === "rock" && botChoice === "paperpaw"){
            setTourResult('lose');
            setBotScore((botScore) + 1)
        } else if(userChoice === "rock" && botChoice === "scissorspaw"){
            setTourResult('win');
            setUserScore(userScore + 1)
        } else if(userChoice === "paper" && botChoice === "rockpaw"){
            setTourResult('win');
            setUserScore(userScore + 1)
        } else if(userChoice === "paper" && botChoice === "scissorspaw"){
            setTourResult('lose');
            setBotScore((botScore) + 1)
        } else if(userChoice === "scissors" && botChoice === "rockpaw"){
            setTourResult('lose');
            setBotScore((botScore) + 1)
        } else if(userChoice === "scissors" && botChoice === "paperpaw"){
            setTourResult('win');
            setUserScore(userScore + 1)
        } else {
            setTourResult('draw')
        }
    }, [userChoice, botChoice])


    /* Return(
        <div>
            {userChoice}
            {botChoice}
            {tourResult}
            {userScore}
            {botScore}


            <Link to="/play">
                        Play Again
                        </Link>
        </div>
    ) */
    //Counter 3...2...1 
    /* const [counter, setCounter] = useState(3);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter])

    
    //Update of the Score


    useEffect(() => {updateScore(tourResult, userScore, botScore, setUserScore, setBotScore)}, [tourResult, userScore, botScore, setUserScore, setBotScore]);
    */

    //Management of images link :

    if(userScore === 3){

    
        return (

            <Container sx={{
                padding: "3rem 0",
                justifyContent: 'center',
                textAlign: 'center',
            }}>

                <Typography variant="h4" component="h4" align="center">
                    The cat has let you win the game!
                </Typography>
                <Typography variant="h4" component="h4" align="center">
                    You have the right to procastinate and not to: {statement}!
                </Typography>

                <Link to="/">
                    <Button variant="contained" size="large" sx={{
                        marginTop: '2rem',
                        }}
                        onClick={() => {
                            setBotScore(botScore - botScore);
                            setUserScore(userScore - 3);
                        }}
                        
                    >Play again
                    </Button>
                </Link>

            </Container>
        )

    } else if(botScore === 3) {
        
 

        return (

            <Container sx={{
                padding: "3rem 0",
                justifyContent: 'center',
                textAlign: 'center',
            }}>
            
                <Typography variant="h4" component="h4" align="center">
                    The cat has defeated you.
                </Typography>
                <Typography variant="h4" component="h4" align="center">
                    You have to: {statement}. 
                </Typography>

                <Link to="/" >
                    <Button variant="contained" size="large" sx={{
                        marginTop: '2rem',
                        }}
                        onClick={() => {
                            setBotScore(botScore - 3);
                            setUserScore(userScore - userScore);
                        }}
                        

                    >Play again
                    </Button>
                </Link>

            </Container>
        )
    
    } else {

        return (
                
            <Box display="flex" flexDirection="column" alignItems="center" sx={{
                bgcolor: theme.palette.tertiary.main,
                paddingBottom: '3rem',
            }}>
            
                {tourResult === "win" && <h3>You win!</h3>}
                {tourResult === "lose" && <h3>You lose!</h3>}
                {tourResult === "draw" && <h3>Draw!</h3>}

                <Score userScore={userScore} botScore={botScore}/>
                
                <HandCard dataId={userChoice} />
                <HandCard dataId={botChoice} />

                <Link to="/play" style={{textDecoration: 'none'}}>
                    <Button variant="contained" size="large" sx={{
                        marginTop: '2rem',
                        textDecoration: 'none',
                      
                        }}
                    >Play again
                    </Button>

                </Link>

                
            
            </Box>

           
        )
    } 
   
};

export default Game; 