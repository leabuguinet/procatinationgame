import React from 'react';
import { Paper } from '@mui/material';
import { keyframes } from '@mui/system';


//Images links
import rockhand from '../assets/images/rockhand.png';
import paperhand from '../assets/images/paperhand.png';
import scissorshand from '../assets/images/scissorshand.png';

import rockpaw from '../assets/images/rockpaw.png';
import paperpaw from '../assets/images/paperpaw.png';
import scissorspaw from '../assets/images/scissorspaw.png';

const cardHover = keyframes`
 0%,
 100% {
   -webkit-transform: translateY(0) rotate(0);
           transform: translateY(0) rotate(0);
   -webkit-transform-origin: 50% 50%;
           transform-origin: 50% 50%;
 }
 15% {
   -webkit-transform: translateY(-30px) rotate(-6deg);
           transform: translateY(-30px) rotate(-6deg);
 }
 30% {
   -webkit-transform: translateY(15px) rotate(6deg);
           transform: translateY(15px) rotate(6deg);
 }
 45% {
   -webkit-transform: translateY(-15px) rotate(-3.6deg);
           transform: translateY(-15px) rotate(-3.6deg);
 }
 60% {
   -webkit-transform: translateY(9px) rotate(2.4deg);
           transform: translateY(9px) rotate(2.4deg);
 }
 75% {
   -webkit-transform: translateY(-6px) rotate(-1.2deg);
           transform: translateY(-6px) rotate(-1.2deg);
 }
}
@keyframes wobble-ver-left {
 0%,
 100% {
   -webkit-transform: translateY(0) rotate(0);
           transform: translateY(0) rotate(0);
   -webkit-transform-origin: 50% 50%;
           transform-origin: 50% 50%;
 }
 15% {
   -webkit-transform: translateY(-30px) rotate(-6deg);
           transform: translateY(-30px) rotate(-6deg);
 }
 30% {
   -webkit-transform: translateY(15px) rotate(6deg);
           transform: translateY(15px) rotate(6deg);
 }
 45% {
   -webkit-transform: translateY(-15px) rotate(-3.6deg);
           transform: translateY(-15px) rotate(-3.6deg);
 }
 60% {
   -webkit-transform: translateY(9px) rotate(2.4deg);
           transform: translateY(9px) rotate(2.4deg);
 }
 75% {
   -webkit-transform: translateY(-6px) rotate(-1.2deg);
           transform: translateY(-6px) rotate(-1.2deg);
 }

`;



const HandCard = ({ setUserChoice, dataId }) => {

    //Choice of the image source
    let imgSrc;

    switch(dataId){
        case 'rock': 
            imgSrc = rockhand;
            break;
        case 'paper': 
            imgSrc = paperhand;
            break;
        case 'scissors':
            imgSrc = scissorshand;
            break;
        case 'rockpaw': 
        imgSrc = rockpaw;
        break;
        case 'paperpaw': 
            imgSrc = paperpaw;
            break;
        case 'scissorspaw':
            imgSrc = scissorspaw;
            break;
        default:
            console.log('erreur');
       
    }
    
   

    return(
    
        <Paper
            component="div"
            elevation={6}
            data-id={dataId}
            onClick={(e) => setUserChoice(e.target.dataset.id)}
            
            sx={{
            height: {xs: 83, sm: 117, md: 130, mdplus: 130, lg: 200},
            width: {xs: 248, sm: 350, md: 390, mdplus: 390, lg: 599},
            /* maxHeight: { xs: 119, md: 151, lg: 201 },
            maxWidth: { xs: 350, md: 450, lg: "50%" }, */
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginBottom: 1,

            "&:hover": {
                animation: `${cardHover} 1s ease`
            },


            }}
        />


    )

}

export default HandCard;