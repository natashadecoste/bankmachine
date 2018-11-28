import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";
import {
  MuiThemeProvider,
  Button,
  Input,
  FormHelperText,
  InputAdornment,
  Paper
} from "@material-ui/core";
import { Chevron } from "../icons/chevron";

export class Deposit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      depositAmt: 0
    };
  }

  selectItem = item => {
    this.setState({
      selectedAccount: item
    });
  };

  checkAmount = amt => {
    if (amt <= 0) {
      alert("Sorry, you can only deposit a positive value.");
      return false;
    } else if (isNaN(amt)) {
      alert("Sorry, you need to use a number!");
      return false;
    } else {
      return true;
    }
  };

  handleClick = () => {
    var amt = document.getElementById("deposit-amt").value;
    if (this.checkAmount(amt)) {
      var txt = `Are you sure you want to add ${amt} to your ${
        this.state.selectedAccount.name
      } account with current balance of  ${
        this.state.selectedAccount.balance
      } in account?`;
      var r = window.confirm(txt);
      if (r === true) {
        this.props.depositFunc(this.state.selectedAccount, amt);
      } else {
      }
    }
  };

  render() {
    return (
      <div className="section-container deposit">
        <h1>Account Deposit</h1>
        <p>Select an account and amount to deposit.</p>
        <Paper className="bankr-paper">
          <h2>New Deposit</h2>
          <div className="input-group">
            <Dropdown
              label="Select Account:"
              select={this.selectItem}
              selected={this.state.selectedAccount}
              list={this.props.accounts}
            />
          </div>
          <div className="input-group">
            <Input
              required
              id="deposit-amt"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              endAdornment={<InputAdornment position="end">CAD</InputAdornment>}
              inputProps={{
                "aria-label": "Deposit Amount"
              }}
            />
            <FormHelperText id="weight-helper-text">
              Deposit Amount
            </FormHelperText>
          </div>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={this.handleClick}
            className="cta"
          >
            Deposit Money
            <Chevron />
          </Button>
        </Paper>
      </div>
    );
  }
}

Deposit.propTypes = {
  accounts: PropTypes.array
};
