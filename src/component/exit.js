import React from "react";
import "./component-styles.scss";
import { Button } from "@material-ui/core/";

export class Exit extends React.Component {
  promptUser = () => {
    var r = window.confirm(
      "Are you sure you want to Exit? This will end your current banking session"
    );
    if (r === true) {
      console.log("You pressed OK!");
      // navigate back to index.js
      window.location.href = "/";
    } else {
      console.log("You pressed CANCEL, resuming window session..");
      // do nothing
    }
  };
  render() {
    return (
      <Button id={this.props.id} onClick={this.promptUser} color="secondary" variant="contained" className="button-exit">

        Exit
      </Button>
    );
  }
}
