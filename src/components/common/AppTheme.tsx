import React, { useContext } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core";
import { ThemeContext } from "../../contexts/ThemeContext";
import Main from "../../pages/Main";

const AppTheme: React.FC = () => {
  const currentThemeContext = useContext(ThemeContext);

  const common: ThemeOptions = {
    typography: {
      fontFamily: '"Raleway", sans-serif !important',
      h1: {
        fontFamily: '"Roboto Slab", sans-serif !important',
      },
    },
  };

  const light: Theme = createMuiTheme({
    palette: {
      primary: {
        main: "#880000",
      },
      secondary: {
        main: "#c38d9e",
      },
      background: {
        default: "#fffefc",
        paper: "#000000	",
      },
      text: {
        primary: "#5d5d5d",
      },
    },
    ...common
  });

  const dark: Theme = createMuiTheme({
    palette: {
      primary: {
        main: "#86C232",
      },
      secondary: {
        main: "#61892F",
      },
      background: {
        default: "#222629",
        paper: "#ffffff",
      },
      text: {
        primary: "#6B6E70",
      },
    },
    ...common
  });

  return (
    // For this example, there is only one page in the website (Main.tsx). If your React app contains routing, you can put your paths in place of Main.tsx
    // so that each page in the routes can use this theme palette as well.
    <ThemeProvider theme={currentThemeContext.lightMode ? light : dark}>
      <Main />
    </ThemeProvider>
  );
}

export default AppTheme;