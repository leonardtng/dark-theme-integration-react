import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { ThemeContext } from "../../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 50,
  },
  themeToggle: {
    margin: 30,
    color: theme.palette.background.paper, 
    //You can use any palette properties defined in your theme. I decided to use my 'paper' color here for the theme toggle
  }
}));

const ButtonGroup: React.FC = () => {
  const classes = useStyles();
  const { lightMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      {/* This button will be in your primary color */}
      <Button className={classes.button} variant="contained" color="primary">
        Primary
      </Button>
      {/* This button will be in your secondary color */}
      <Button className={classes.button} variant="contained" color="secondary">
        Secondary
      </Button>
      <IconButton className={classes.themeToggle} color="default" onClick={() => toggleTheme()}>
        {/* This conditional will change the icon displayed depending on which theme is currently active */}
        {lightMode ? (
          <NightsStayIcon />
        ) : (
            <Brightness7Icon />
          )}
      </IconButton>
      {/* This button will be in a custom color due to the conditional in the inline style */}
      <Button className={classes.button} variant="contained" style={{backgroundColor: lightMode ? '#E27D60' : '#FAED26'}}>
        Custom Color
      </Button>
    </div>
  )
}

export default ButtonGroup
