import React from "react";
import { Login, BackgroundVideo  } from "./../component/";
import "./layouts.scss";
import src from './videos/splashvideo.mp4'


import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bbdefb"
    },
    secondary: {
      main: "#0d47a1"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default () => (
  <div className="sign-in">
    <h1>
      Welcome,
      <br />
      <i>sign in to continue.</i>
    </h1>
    <Login />
    <BackgroundVideo src={src} />
  </div>
);
