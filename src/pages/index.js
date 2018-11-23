import React from "react";
import { Login, BackgroundVideo } from "./../component/";
import "./layouts.scss";
import src from "./videos/splashvideo.mp4";

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
  <BackgroundVideo src={src} />
    
    <div className="title-content">
      <h1>Welcome,</h1>
      <h2>log in to get started.</h2>
      <Login />
    </div>

   
    
  </div>
);
