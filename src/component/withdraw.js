import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";
import { MuiThemeProvider, Button, TextField } from "@material-ui/core";

export class Withdraw extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      selectedCurrency: "CAD"
    };
  }

  handleClick = (ev, tar) => {
    if (this.checkAmount()) {
      console.log("mr false");
    }
  };

  checkAmount = () => {
    var amt = document.getElementById("withdraw-amt").value;
  
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
      <div className="section-container widthdraw">
        <h1>Account Withdraw:</h1>
        <div className="input-group">
          <Dropdown
            label="Select Account:"
            select={this.selectItem}
            selected={this.state.selectedAccount}
            list={this.props.accounts}
          />
        </div>
        <div className="input-group">
          <TextField
            required
            id="withdraw-amt"
            label="Amount to Withdraw"
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
        >
          Withdraw Money
        </Button>
      </div>
    );
  }
}

Withdraw.propTypes = {
  accounts: PropTypes.array,
  withdrawFunc: PropTypes.func
};
