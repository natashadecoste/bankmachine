import React from "react";
import "./layouts.scss";
import { AppBar, Typography } from "@material-ui/core/";
import Helmet from "react-helmet"

export class Page extends React.Component {
  render() {
    return (
      <div className="page-layout">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About PARKr</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Helmet>
        <AppBar className="top-bar" position="static" styles={{zIndex: 9999}}> Logo </AppBar>
        {this.props.children}
      </div>
    );
  }
}
