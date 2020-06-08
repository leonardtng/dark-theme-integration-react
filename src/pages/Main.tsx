import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/navigation/NavBar";
import ButtonGroup from "../components/buttons/ButtonGroup";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    textAlign: 'center',
    '& .MuiTypography-root': {
      margin: '20px 0px'
    }
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  // If you had any components in your App.tsx before implementing dark theme, you can move them here for them to utilise your newly created color palettes
  return (
    <div className={classes.main}>
      <NavBar />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {/* Typography styled in primary color */}
          <Typography variant="h1" component="h1" color="primary">
            Integrating Dark Theme into a React + Material-UI Web Application
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* Typography styled in secondary color */}
          <Typography variant="h3" component="h2" color="secondary">
            A step-by-step guide to integrate dark theme into your React + Material-UI Web Application
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* Typography styled in text color defined in palette by default */}
          <Typography variant="body1" component="p">
            This is in plain text, using the text color of the theme palette. Click on the dark/light theme button at the bottom to switch themes.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;