import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


const Start = ({statement, setStatement}) => {


    const getStatement = (e) => {

        setStatement(e.target.value)
        
    }

    if(!statement){
        return (
            <div>
                <Typography variant="h4" component="h2" mb={2} sx={{
          color: 'blue',
          bgcolor: 'black'
        }}>
                    You would like to procrastinate, but you know it's bad?
                </Typography>

                <Typography variant="h4" component="h2" mb={9}>
                    Let the cat decide for you!
                </Typography>
             
                <Typography variant="h5" component="p">
                Tell the cat what you don't want to do:
                </Typography>

                <TextField id="statement" label='' onChange={getStatement} variant="standard" />

            </div>    
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