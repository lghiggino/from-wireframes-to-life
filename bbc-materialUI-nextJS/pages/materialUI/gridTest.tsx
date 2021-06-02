import React from 'react';
import Image from 'next/image';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

//layout import
import CustomAppBar from "../../src/CustomAppbar"

const useStyles = makeStyles({
  root: {
    marginTop: "64px",
    backgroundImage: `url(/images/puppy.jpeg)` ,
    width: "100%",
    height: "1280px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    outline: "1px solid red"
  },
});


const gridTest = () => {
  const classes = useStyles()

    return (
        <React.Fragment>
          <CssBaseline />
          <CustomAppBar />
          <div className={classes.root}>this is the root div</div>
          
          <Typography>Container && Container disableGutters</Typography>
          <Container maxWidth="xs">
            <Typography component="div" style={{ backgroundColor: '#afa8fa', height: '10vh' }} />
          </Container>
          <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#bfb8fb', height: '10vh' }} />
          </Container>
          <Container maxWidth="md">
            <Typography component="div" style={{ backgroundColor: '#cfc8fc', height: '10vh' }} />
          </Container>
          <Container maxWidth="lg">
            <Typography component="div" style={{ backgroundColor: '#dfd8fd', height: '10vh' }} />
          </Container>
          <Container maxWidth="xl">
            <Typography component="div" style={{ backgroundColor: '#efe8fe', height: '10vh' }} />
          </Container>
          <Container maxWidth="xl" disableGutters>
            <Typography component="div" style={{ backgroundColor: '#afa8fa', height: '10vh' }}  />
          </Container>
          <Container maxWidth="xl" disableGutters className={classes.root}>
            <Image 
                src="/images/puppy.webp" 
                alt=""
                width={"1980"}
                height={"1280"}    
            />
            <Typography component="div" style={{ backgroundColor: '#afa8fa', height: '10vh' }} defaultValue="og photo created by master1305 - www.freepik.com" />
          </Container>
          
        </React.Fragment>
      );
}

export default gridTest