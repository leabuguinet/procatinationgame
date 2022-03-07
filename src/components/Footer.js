import React from 'react';
import { Link } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


const Footer = () => {

    return(
        <div>
          
          <footer>
            <Box 
                sx={{
                    bgcolor: "black",
                    textAlign: 'left',
                    padding: "5rem 0",
                }}>
                
                <Container>
                   
                   <Link href="https://leab.me" color="#ffd600">
                    
                        Made with love, no human were harmed.
               
                    </Link>
                 
                   
                </Container>

            </Box >

        </footer>
            

        </div>
    )
}

export default Footer; 