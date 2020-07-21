import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import mainimage from "./../../../../assets/logo.png";
import Box from '@material-ui/core/Box';

function Upper()
{ 
  const useStyles = makeStyles({
    root: {
      float:"left",  
      height:"400px",
      width:"40%", 
      margin:'32px 0px 32px 0px',
    },
    text: {
      color:"#103B81",
    },
    image:{
      float:"right",
      alignItems:"right",
      height:"400px", 
      width:"60%",
      border:"2px black",
      margin:'32px 0px 32px 0px',
    },
  });
  const classes = useStyles();
    return (
     <div maxWidth="lg"  > 
     <div>
      <Typography component="div">
      <Box fontWeight="fontWeightMedium" fontSize={80} m={1} className={classes.text}>
       Projects
      </Box>
      </Typography>
      </div>
      <div >
      <Box display="flex" flexDirection="row">
      <Typography component="span" p={1} className={classes.root}>
      <Box className={classes.maincontent}  alignContent="flex-start">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
      </Box>
      </Typography>
      <Box  component="span" p={2}   alignContent="flex-end">
         <img src={mainimage} alt="main" className={classes.image}/>
      </Box>
      </Box>
      </div>
      </div>
     
);
}

export default Upper;

