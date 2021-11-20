import React, { useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Game from './components/Game';
import Play from './components/Play';
import Header from './components/Header';
import Start from './components/Start';

import Container from '@mui/material/Container';





function App() {

  const [statement, setStatement] = useState("")
  const [userChoice, setUserChoice] = useState("1");
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);



  return (
    
    <BrowserRouter>
      <div className="App">
        
        <Container maxWidth="sm">
        <Header />

        <Routes>

          <Route exact path="/" element={
         
            <Start statement={statement} setStatement={setStatement}/>
            
            
          }/>

          <Route exact path="/play" element={
            <Play 
              userChoice={userChoice} 
              setUserChoice={setUserChoice} 
              statement={statement}
              userScore={userScore} 
              botScore={botScore}
              setBotScore={setBotScore}
              setUserScore={setUserScore}
              />
          }/>

          <Route exact path="/game" element={
            <Game 
              userChoice={userChoice} 
              userScore={userScore} 
              setUserScore={setUserScore} 
              botScore={botScore} 
              setBotScore={setBotScore}
            />} 
          />
      
          
        </Routes>

        </Container>

      </div>

    </BrowserRouter>
  
  );
}

export default App;
