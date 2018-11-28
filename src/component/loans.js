import React from "react";
import "./component-styles.scss"; // put your styles in here
import {
  Button,
  TextField,
  Select,
  Paper,
  FormHelperText,
  Input,
  InputAdornment
} from "@material-ui/core/"; // add in components from Material UI
import { Chevron } from "./../icons/chevron";
import PropTypes from "prop-types";

export class Loans extends React.Component {
  constructor(props) {
    super(props);
  }

  checkFields = amt => {
    var first = document.getElementById("f_Name").value;
    var last = document.getElementById("l_Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_num").value;
    var reason = document.getElementById("loan_Reason").value;

    if (
      first === "" ||
      last === "" ||
      email === "" ||
      phone === "" ||
      amt === "" ||
      reason === ""
    ) {
      alert(
        "Sorry, please ensure that you have filled out all required fields."
      );
      return false;
    }

    if (amt < 0 || isNaN(amt) || amt === "") {
      alert("Sorry, please enter a postive number for the loan amount.");
      return false;
    }

    if (phone.length != 10) {
      alert("Please enter a 10-digit phone number.");
      return false;
    }

    return true;
  };

  handleClick = () => {
    var amt = document.getElementById("loan_Amt").value;
    if (this.checkFields(amt)) {
      document.getElementById("f_Name").value = "";
      document.getElementById("l_Name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone_num").value = "";
      document.getElementById("loan_Reason").value = "";
      document.getElementById("loan_Amt").value = "";
      alert(
        "Success! Your application has been submitted. A representative will contact you by e-mail within 3 business days."
      );
    }
  };

  render() {
    return (
      <div className="section-container">
        <h1>Preliminary Loans</h1>
        <p>
          Bankr now has support for processing your preliminary loan
          applications! No more long lines and short banking hours. Get your
          loan form submitted today!
        </p>
        <Paper className="bankr-paper">
          <h2>Preliminary Loan Application</h2>
          <form className="">
            <div className="input-group">
              <TextField
                fullWidth
                required
                id="f_Name"
                label="First name"
                margin="normal"
              />
              <br />
              <TextField
                fullWidth
                required
                id="l_Name"
                label="Last name"
                margin="normal"
              />
              <br />
              <TextField
                fullWidth
                required
                id="email"
                label="E-mail"
                margin="normal"
              />
              <br />
              <TextField
                required
                fullWidth
                id="phone_num"
                label="Phone Number"
                margin="normal"
              />
              <br />
              <Input
                style={{ marginTop: "16px" }}
                required
                id="loan_Amt"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">CAD</InputAdornment>
                }
                inputProps={{
                  "aria-label": "Transfer Amount"
                }}
              />
              <FormHelperText>Loan Amount</FormHelperText>
              <br />
              <TextField
                fullWidth
                required
                id="loan_Reason"
                label="Reason for loan"
                margin="normal"
              />
              <br />
              <br />
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={this.handleClick}
                className="cta"
              >
                Submit
                <Chevron />
              </Button>
            </div>
          </form>
        </Paper>

        <Paper className="bankr-paper footer">
          <svg x="0px" y="0px" viewBox="0 0 286.054 286.054">
            <path
              style={{ fill: "#E2574C" }}
              d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027   c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236   c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209   S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972   c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723   c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843   C160.878,195.732,152.878,187.723,143.036,187.723z"
            />
          </svg>
          <p>
            Psst! Bankr starts processing your loan form immediately but it
            still takes a few days for you to get a response
          </p>
        </Paper>
      </div>
    );
  }
}
