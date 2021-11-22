import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';


const Start = ({statement, setStatement}) => {

    const theme = useTheme();

    const getStatement = (e) => {

        setStatement(e.target.value)
        
    }

    if(!statement){
        return (
            <>
                <Box 
                    sx={{
                        bgcolor: theme.palette.tertiary.main,
                    }}
                >
                    <Container>
                        <Typography variant="h4" component="h2" mb={2} sx={{}}>
                            You would like to procrastinate, but you know it's bad?
                        </Typography>

                        <Typography variant="h4" component="h2" mb={9}>
                            Let the cat decide for you!
                        </Typography>
                    </Container> 

                </Box>
             
                <Typography variant="h5" component="p">
                Tell the cat what you don't want to do:
                </Typography>

                <TextField id="statement" label='' onChange={getStatement} variant="standard" />
            </>
               
        )   
    } else { 
        return(
        
            <div>
                <Typography variant="h4" component="h2" mb={2}>
                    You would like to procrastinate, but you know it's bad?
                </Typography>

                <Typography variant="h4" component="h2" mb={9}>
                Let the cat decide for you!
                </Typography>
             
                <Typography variant="h5" component="p">
                Tell the cat what you don't want to do:
                </Typography>
         
                <TextField id="statement" label='' onChange={getStatement} variant="standard" />

                <Link to="/play">
                    <button>Play</button>
                </Link>
                
            </div>
        )
    }
};

export default Start; 