import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HandCard from './HandCard';
import { Box } from '@mui/system';
import Score from './Score';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import Result from './Result';

const Game = ({ botChoice, userChoice, userScore, setUserScore, botScore, setBotScore, statement }) => {
        
    const [tourResult, setTourResult] = useState("");
    const [gameResult, setGameResult] = useState();

    const theme = useTheme();

    //Management of the game and user/bot score
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

    //Give the winner of the game
    useEffect(() => {
        if(userScore === 3){
            setGameResult(true);
        } else if(botScore === 3){
            setGameResult(false);
        }
    })


    if(userScore === 3 || botScore === 3 ){

        return <Result userScore={userScore} setUserScore={setUserScore} botScore={botScore} setBotScore={setBotScore} statement={statement} gameResult={gameResult}/>

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
                
                <HandCard dataId={userChoice} animation={false}/>
                <HandCard dataId={botChoice} animation={false}/>

                <Link to="/play" style={{textDecoration: 'none'}}>
                    <Button variant="contained" size="large" sx={{
                        marginTop: '2rem',
                        textDecoration: 'none',
                        }}
                    >
                        Next round
                    </Button>

                </Link>
            </Box>
        )
    } 
};

export default Game; 