import React from 'react';
import Image from 'next/image';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, makeStyles, Paper } from '@material-ui/core';

//layout import
import CustomAppBar from "../../src/CustomAppbar"

const useStyles = makeStyles({
  root: {
    marginTop: "64px",
    backgroundImage: `url(/images/puppy.webp)`,
    width: "100%",
    height: "1280px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  outline: {
    outline: "2px solid red",
    width: "100%",
    height: "55vh",
  },
  innerGridA: {
    backgroundImage: `url(/images/kittyA.webp)`,
  },
  innerGridB: {
    backgroundImage: `url(/images/kittyB.webp)`,
  },
  rootR: {
    flexGrow: 1,
    backgroundColor: "#a6b6c6",
    height: "auto"
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 32,
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
        <Typography component="div" style={{ backgroundColor: '#afa8fa', height: '10vh' }} />
      </Container>
      {/* <Container maxWidth="xl" disableGutters className={classes.root}>
            <Typography component="div" style={{ backgroundColor: '#afa8fa', height: '10vh' }} defaultValue="og photo created by master1305 - www.freepik.com" />
          </Container> */}

      <h2>From here on we will test container XL and innerGrids</h2>
      <p>Grid item xs={12} sm={12} md={6} spacing={0}</p>

      <Container maxWidth="xl" disableGutters className={classes.outline}>
        <Grid container >
          <Grid item xs={12} sm={12} md={6} spacing={2} className={classes.innerGridA}>
            <Typography variant="h1" component="h1">
              Lorem, ipsum dolor.
            </Typography>
            <Typography >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio voluptas dolor beatae facilis quibusdam impedit saepe eaque nemo pariatur? Sequi velit natus, nulla tenetur possimus eligendi quod quasi ipsum accusantium quibusdam itaque. Ducimus, iusto!
            </Typography>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia hic ullam commodi? Temporibus animi repellendus, earum quo numquam, corporis illo omnis at non hic minima maiores soluta quidem ipsam quasi, veniam vitae exercitationem! Modi!</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} spacing={0} className={classes.innerGridB}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum quidem blanditiis inventore tempora, ducimus recusandae aliquid, perspiciatis architecto distinctio, earum culpa eius laudantium quam repellat exercitationem fugit autem dignissimos porro deleniti a. Recusandae natus quaerat sequi quas optio cumque quibusdam dolorum, dignissimos blanditiis expedita odio exercitationem saepe, nobis doloremque facilis deleniti earum! Accusantium tempora molestiae rem totam nostrum provident, consectetur quo quas, fugiat dolorum ipsum suscipit debitis quae in. Expedita commodi sapiente inventore sunt minus debitis. Natus asperiores nulla veritatis quasi cupiditate deserunt, eius sed autem animi. Et ipsa repellat accusamus laboriosam? Temporibus dolor rem cum! Accusamus illum maiores, corporis tempora magni expedita unde? Ab nihil corporis eos velit repellendus optio, eveniet eum dolore, odit excepturi inventore est voluptate tempora mollitia nisi dolorem quos error ullam sit ad ratione praesentium culpa voluptatum. Deleniti corporis cum libero eum eligendi. Aspernatur accusantium nulla quam omnis sunt. Eaque dolorem repudiandae ut, expedita suscipit minima repellat voluptatum nostrum aperiam doloribus et, animi quam inventore accusantium aspernatur! Illo porro distinctio fugiat doloribus, obcaecati deserunt atque? Dolores optio repellendus ipsum asperiores quaerat suscipit impedit odit minima commodi aperiam sunt quis, cumque dolorum quia. Voluptatem unde doloribus optio a nostrum nihil dolores placeat eaque ut quis, laboriosam illum nobis assumenda facilis, exercitationem cumque dignissimos impedit quam eos! Iste pariatur, perferendis rerum odit eius cupiditate est laudantium architecto vitae doloremque possimus cumque, vero nostrum dolore esse beatae. Iusto deserunt, et veritatis alias natus quibusdam sapiente dicta optio, id esse minima molestiae. Vitae voluptate corrupti cum possimus cumque ducimus accusantium, culpa, rerum aliquam saepe hic voluptatum deleniti delectus, quam impedit eligendi reiciendis in praesentium. Ducimus nam saepe delectus, id dicta tempore. Laboriosam ipsum impedit ullam voluptatem possimus dolore maxime assumenda distinctio at rem facilis atque dignissimos, velit libero quas, aperiam doloribus, blanditiis in vel ducimus! Eius, ex minima?</p>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.rootR}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                  <Typography >
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>

    </React.Fragment>
  );
}

export default gridTest