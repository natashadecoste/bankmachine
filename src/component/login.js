import React from "react";
import "./component-styles.scss";
import { TextField } from "@material-ui/core/";

export class Login extends React.Component {
  validation = () => {};
  render() {
    return (
      <div className="login-form">
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Account Number"
          defaultValue=""
          margin="normal"
        />
        <TextField
          fullWidth
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </div>
    );
  }
}
