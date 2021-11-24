import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import StartButton from './StartButton';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles({
    fields: {
        '&input': {
            fontSize: 45,
            marginTop: 30
        }
        
    }
})

const Start = ({statement, setStatement}) => {

    const classes = useStyles();
    const theme = useTheme();

    const [startGame, setStartGame] = useState(false);
   
    const getStatement = (e) => {

        setStatement(e.target.value);
        
        if(e.target.value.length > 0 ){
            setStartGame(true)
        } else {
            setStartGame(false)
        }
    }
    
    return (
        <Box
            sx={{
                bgcolor: theme.palette.tertiary.main,
                textAlign: "center",
        }}>

            <Box>
                <Container>
                    <Typography variant="h4" component="h2" mb={2} sx={{}}>
                        You would like to procrastinate, but you know it's bad?
                    </Typography>

                    <Typography variant="h4" component="h2" pb={9}>
                        Let the cat decide for you!
                    </Typography>
                </Container> 
            </Box>
            
            <Box>
                <Container>
                    <Typography variant="h5" component="p">
                    Tell the cat what you don't want to do:
                    </Typography>

                    <TextField 
                        id="statement" 
                        label='Type here' 
                        onChange={getStatement} 
                        variant="standard" 
                        size="large"
                        sx={{
                            paddingBottom: 4,
                        }}
                    />
            
                </Container> 
            </Box>

            <StartButton startGame={startGame}/>

        </Box>
            
    )   
    
};

export default Start; 