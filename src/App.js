import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";


//Components
import Game from './components/Game';
import Play from './components/Play';
import Header from './components/Header';
import Start from './components/Start';

//Material UI imports
import { createTheme, ThemeProvider, responsiveFontSizes, useTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { yellow } from "@mui/material/colors";
import { Box } from '@mui/system';

const primaryColor = "#000000";
const secondaryColor = "#ffffff";
const tertiaryColor = yellow; //#ffd600 

const defaultTheme = createTheme();
let customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor ,
    },
    secondary: {
      main: secondaryColor ,
    },
    tertiary: defaultTheme.palette.augmentColor({
      color: { main: tertiaryColor['A700']},
      name: "tertiary"
    })
    /* background: {
      default: tertiaryColor['A700'],
    }, */
    
  },
  typography: {
  
    h1: {
        color: tertiaryColor['A700']
    },

  },
  
});
customTheme = responsiveFontSizes(customTheme)

function App() {

  const [statement, setStatement] = useState("")
  const [userChoice, setUserChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);



  return (
    
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
    
      <BrowserRouter>

        <div className="App">
              
          <Header />

          <Box 
            sx={{ 
              padding: "5rem",
              bgcolor: customTheme.palette.tertiary.main, 
              height: "70vh"
          }}>
            <Routes>

            
              <Route exact path="/" element={
                <Start statement={statement} setStatement={setStatement}/>  
              } />

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
              </Box>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  
  );
}

export default App;
