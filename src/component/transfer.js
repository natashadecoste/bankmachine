import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";
import { Chevron } from "./../icons/chevron";
import {
  Paper,
  Button,
  Input,
  InputAdornment,
  FormHelperText
} from "@material-ui/core/";


export class Transfer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      selectedAccount2: props.accounts[1]
    };
  }

  selectItem = (item, status) => {
    switch (status) {
      case 1:
        this.setState({
          selectedAccount: item
        });

        break;
      case 2:
        this.setState({
          selectedAccount2: item
        });
        break;
    }
  };

  checkAmount = amt => {
    if (amt <= 0) {
      alert("Sorry, you can only transfer a positive number (greater than 0).");
      return false;
    } else if (isNaN(amt)) {
      alert("Sorry, you need to use a number!");
      return false;
    } else if (amt > this.state.selectedAccount.balance) {
      alert(
        `Oops! Looks like you are trying to transfer more money than you have in your ${
          this.state.selectedAccount.name
        } account... Please adjust your transfer amount.`
      );
      return false;
    } else if (
      this.state.selectedAccount.name === this.state.selectedAccount2.name
    ) {
      alert(
        `Oops! Looks like you are trying to use the same account for transferring and receiving. Please pick 2 different accounts.`
      );
    } else {
      return true;
    }
  };

  handleClick = () => {
    var amt = document.getElementById("transfer-amt").value;
    if (this.checkAmount(amt)) {
      var txt = `Are you sure you want to transfer ${amt} from your ${
        this.state.selectedAccount.name
      } account ($${this.state.selectedAccount.balance}) to your ${
        this.state.selectedAccount2.name
      } account? ($${this.state.selectedAccount2.balance})`;
      var r = window.confirm(txt);
      if (r === true) {
        this.props.transferFunc(
          this.state.selectedAccount,
          this.state.selectedAccount2,
          amt
        );
      } else {
      }
    }
  };

  render() {
    return (
      <div className="section-container">
        <h1>Transfer between Accounts</h1>
        <p>
          Bankr provides the easiest and fastest way to transfer your money
          between accounts. Simply pick 2 accounts (one to transfer FROM, one to
          transfer TO), decide on the amount and let Bankr take care of the
          rest.
        </p>
        <Paper className="bankr-paper">
          <h2>New Account Transfer</h2>
          <div className="input-group">
            <Dropdown
              label="Transfer from:"
              select={item => {
                this.selectItem(item, 1);
              }}
              selected={this.state.selectedAccount}
              list={this.props.accounts}
            />
          </div>
          <div className="input-group">
            <Dropdown
              label="Transfer to:"
              select={item => {
                this.selectItem(item, 2);
              }}
              selected={this.state.selectedAccount2}
              list={this.props.accounts}
            />
          </div>
          <div className="input-group">
            <Input
              required
              id="transfer-amt"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              endAdornment={<InputAdornment position="end">CAD</InputAdornment>}
              inputProps={{
                "aria-label": "Transfer Amount"
              }}
            />
            <FormHelperText>Transfer Amount</FormHelperText>
          </div>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={this.handleClick}
            className="cta"
          >
            Transfer Money
            <Chevron />
          </Button>
        </Paper>
      </div>
    );
  }
}

Transfer.propTypes = {
  accounts: PropTypes.array,
  transferFunc: PropTypes.func
};
