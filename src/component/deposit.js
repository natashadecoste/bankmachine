import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";
import { MuiThemeProvider, TextField, Button } from "@material-ui/core";
import { Chevron } from "../icons/chevron";

export class Deposit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      selectedCurrency: "CAD"
    };
  }

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
      } account wiht current balance of  ${
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
        <div className="input-group">
          <Dropdown
            label="Select Account:"
            select={this.selectItem}
            selected={this.state.selectedAccount}
            list={this.props.accounts}
          />
        </div>
        <div className="input-group">
          How much money to deposit?
          <TextField
            required
            id="deposit-amt"
            label="Amount to Deposit"
            margin="normal"
          />
          <Dropdown
            select={this.selectCurrency}
            list={[{ name: "CAD" }, { name: "USD" }, { name: "EUR" }]}
          />
        </div>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={this.handleClick}
          className="cta"
        >
          Deposit Money
          <Chevron/>
        </Button>
      </div>
    );
  }
}

Deposit.propTypes = {
  accounts: PropTypes.array
};
