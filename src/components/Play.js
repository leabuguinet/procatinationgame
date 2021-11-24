import React from 'react';
import { Link } from "react-router-dom";
import Score from './Score';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import rockhand from '../assets/images/rockhand.png'


const Play = ({setUserChoice, statement, userScore, botScore}) => {

    return(
    
        
    <Box>

        <Container>
            <Score userScore={userScore} botScore={botScore}/>
        </Container>
        <h1>{statement}</h1>

        <Link to="/game">
        <Box
            component="div"
            sx={{
            height: 800,
            width: 800,
            maxHeight: { xs: 119, md: 151, lg: 268 },
            maxWidth: { xs: 350, md: 450, lg: 800 },
            backgroundImage: `url(${rockhand})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            }}
            /* alt="Rock sign hand"
            src={rockhand}
 */
            data-id="rock"
            onClick={(e) => setUserChoice(e.target.dataset.id)}
        />

        </Link>
        <Link to="/game">
          <div
            data-id="paper"
            onClick={(e) => setUserChoice(e.target.dataset.id)}
            className=""
          >Scissors</div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={(e) => setUserChoice(e.target.dataset.id)}
            className=""
          >Rock</div>
        </Link>
      
    </Box>

    )
};

export default Play; 