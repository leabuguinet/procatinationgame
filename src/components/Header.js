import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import pawimg from '../assets/images/pawyellow.png';
import { Paper } from '@mui/material';


const Header = () => {



    return(
        <header>
            <Box 
                sx={{
                    bgcolor: "black",
                    padding: "1rem 0",
                    textAlign: 'center'
                }}>
                
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <Typography variant="h2" component="h1">

                    The ProCATination Game
                    
                    </Typography>

                    <Paper
                        component="div"
                        sx={{
                            width: 60,
                            height: 60,
                            backgroundColor: 'black',
                            backgroundImage: `url(${pawimg})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            marginBottom: 1,
                            objectFit: 'contain',
                            marginLeft: {xs: 0, sm: 3}
                        }}
                    />
                    
                </Container>

            </Box >

        </header>
    )
}

export default Header; 