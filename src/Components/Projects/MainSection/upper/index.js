import React from 'react';
import { View,Image } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import zulip from "./../../../../assets/zulip-icon.png";
import github from "./../../../../assets/github-logo.png";
import mainimage from "./../../../../assets/logo.png";
import { Avatar } from '@material-ui/core';
import { typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
function Upper()
{ 
  const useStyles = makeStyles({
    maincontent: {
      fontSize : 18,
      fontWeight:400,
       fontFamily:"avenir ",
    },
    avatar: {
      display: 'flex',
     },
    root: {
      float:"left",  
      width:"431.35px",
      height:"400px", 
      margin:'32px 0px 32px 0px',
    },
    media: {
      width:400,
      height:500,
      margin: '0px 0px 0px 32px',
    },
    text: {
      color:"#103B81",
    },
    image:{
      float:"right",
      width:"800px",
      height:"400px", 
    },
  });
  const classes = useStyles();
    return (
      <div maxWidth="lg"  > 
     
      <Typography component="div">
      <Box fontWeight="fontWeightMedium" fontSize={80} m={1} className={classes.text}>
       Projects
      </Box>
      </Typography>
      <Typography component="div" margin="32px 0 0 0" className={classes.root}>
      <Box className={classes.maincontent}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
      </Box>
      </Typography>
      <div className={classes.image}>
         <img src={mainimage} />
      </div>
      </div>
     
);
}

export default Upper;

