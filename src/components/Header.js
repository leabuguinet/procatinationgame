import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';




const Header = () => {

    

    return(
        <header>
            <Box 
                sx={{
                    bgcolor: "black",
                    padding: "5rem 0",
                    textAlign: 'center'
                }}>
                
                <Container >
                    <Typography variant="h1" component="h1">
                    The ProCATination Game
                    </Typography>
                </Container>

            </Box >

        </header>
    )
}

export default Header; 