import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";



const Game = ({ userChoice, userScore, setUserScore, botScore, setBotScore }) => {


    //Definition of the bot game choice
    const [botChoice, setBotChoice] = useState("");

    const getBotChoice = () => {
        const choices = ["rock", 'paper', 'scissors'];
        setBotChoice(choices[Math.floor(Math.random() * 3)])
    }

    useEffect(() => {getBotChoice()}, []);

    //Definition of the winner 
    const [tourResult, setTourResult] = useState("");

    const getResult = () => {
        if(userChoice === "rock" && botChoice === "paper"){
            setTourResult('lose');
            setBotScore(botScore + 1);
        } else if(userChoice === "rock" && botChoice === "scissors"){
            setTourResult('win');
            setUserScore(userScore + 1);
        } else if(userChoice === "paper" && botChoice === "rock"){
            setTourResult('win');
            setUserScore(userScore + 1)
        } else if(userChoice === "paper" && botChoice === "scissors"){
            setTourResult('lose');
            setBotScore(botScore + 1);
        } else if(userChoice === "scissors" && botChoice === "rock"){
            setTourResult('lose');
            setBotScore(botScore + 1);
        } else if(userChoice === "scissors" && botChoice === "paper"){
            setTourResult('win');
            setUserScore(userScore + 1)
        } else {
            setTourResult('draw')
        }

    }
        
    useEffect(() => {getResult()}, [botChoice]);

    
    if(userScore === 3){
        
        return (
            
            <p>c'est fini vous avez gagné</p>
        )

    } else if(botScore === 3) {
        
        return (
            
            <p>c'est fini vous avez perdu</p>
        )
    
    } else {

        return (

            <div className="game">
            my choice:{userChoice} <br />
            House choice:{botChoice} <br />
        
            Result:
            {tourResult === "win" && <h2>You Win</h2>}
            {tourResult === "lose" && <h2>You lose</h2>}
            {tourResult === "draw" && <h2>Draw</h2>}
        
            <Link to="/play" onClick={() => setBotChoice()}>
            Play Again
            </Link>
        </div>
        )
    }
   
};

export default Game; 