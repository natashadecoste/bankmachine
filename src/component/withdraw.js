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

export class Withdraw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      selectedCurrency: "CAD"
    };
  }

  handleClick = () => {
    var amt = document.getElementById("withdraw-amt").value;
    if (this.checkAmount(amt)) {
      var txt = `Are you sure you want to withdraw ${amt} from your current balance of  ${
        this.state.selectedAccount.balance
      } in your ${this.state.selectedAccount.name} account?`;
      var r = window.confirm(txt);
      if (r === true) {
        this.props.withdrawFunc(this.state.selectedAccount, amt);
      } else {
      }
    }
  };

  checkAmount = amt => {
    if (amt <= 0) {
      alert("Sorry, you can only withdraw a positive number greater than 0!");
      return false;
    } else if (isNaN(amt)) {
      alert("Sorry, you need to use a number!");
      return false;
    } else if (amt > this.state.selectedAccount.balance) {
      alert(
        "Oops! Looks like you are trying to withdraw more money than you have... That's embarassing"
      );
      return false;
    } else {
      return true;
    }
  };

  selectItem = item => {
    this.setState({
      selectedAccount: item
    });
  };

  selectCurrency = currency => {
    this.setState({
      selectedCurrency: currency.name
    });
  };

  render() {
    return (
      <div className="section-container">
        <h1>Withdraw Money from an Account</h1>
        <p>Select an account and amount to withdraw.</p>
        <Paper className="bankr-paper">
          <h2>New Withdrawl</h2>
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
              id="withdraw-amt"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              endAdornment={<InputAdornment position="end">CAD</InputAdornment>}
              inputProps={{
                "aria-label": "Withdraw Amount"
              }}
            />
            <FormHelperText>Withdraw Amount</FormHelperText>
          </div>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={this.handleClick}
            className="cta"
          >
            Withdraw Money
            <Chevron />
          </Button>
        </Paper>
      </div>
    );
  }
}

Withdraw.propTypes = {
  accounts: PropTypes.array,
  withdrawFunc: PropTypes.func
};
