import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";


//Components
import Game from './components/Game';
import Play from './components/Play';
import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';

//Material UI imports
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
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
    },),
    action: {
      active: tertiaryColor['A700'],
    }
    /* background: {
      default: tertiaryColor['A700'],
    }, */
    
  },
  typography: {
    h2: {
        color: tertiaryColor['A700'], 
    },
    h6: {
      color: tertiaryColor['A700'], 
    },
    
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdplus: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  
  
},);

customTheme = responsiveFontSizes(customTheme)

function App() {

  const [statement, setStatement] = useState("")
  const [userChoice, setUserChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [botChoice, setBotChoice] = useState("");



  return (
    
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
    
      <BrowserRouter>

        <div className="App">
              
          <Header />

          <Box 
            sx={{ 
              paddingTop: "2rem",
              bgcolor: customTheme.palette.tertiary.main, 
              height: '80vh',
              paddingBottom: '5rem',
           
          }}>

            <Routes>

            
              <Route exact path="/" element={
                <Start 
                  statement={statement} 
                  setStatement={setStatement}
                  userScore={userScore} 
                  botScore={botScore}
                  setBotScore={setBotScore}
                  setUserScore={setUserScore}
                  
                  />  
              } />

              <Route exact path="/play" element={
                <Play 
                  userChoice={userChoice} 
                  setUserChoice={setUserChoice} 
                  botChoice={botChoice}
                  setBotChoice={setBotChoice}
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
                  botChoice={botChoice}
                  setBotChoice={setBotChoice}
                  setUserScore={setUserScore} 
                  botScore={botScore} 
                  setBotScore={setBotScore}
                  statement={statement}

                />} 
              />
              
            </Routes>
          
          </Box>

          <Footer />
          
        </div>
      </BrowserRouter>
    </ThemeProvider>
  
  );
}

export default App;
