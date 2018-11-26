import React from "react";
import { Login, BackgroundVideo, Keyboard } from "./../component/";
import { Button } from '@material-ui/core/';
import "./layouts.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Helmet from "react-helmet";
import src from "./videos/splashvideo.mp4";
import {AboutIcon} from "./../icons/menuicons"

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
    <CssBaseline />
    <Helmet>
      <meta charSet="utf-8" />
      <title>BANKr Session</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <BackgroundVideo src={src} />

    <div className="title-content">
      <h1>Welcome,</h1>
      <h2>log in to get started.</h2>
      <Login />
      <Button className="cta" href="/session" variant="contained" color="primary">Done
      </Button>
    </div>

    <div className="about-page">
    <AboutIcon/>
    </div>
    
    {/* <div className="keyboard-wrapper">
      <Keyboard />
    </div> */}

    
  </div>
);
