import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core/";

export class CurrencyExchange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      selectedCurrency: "CAD",
      exchangeRate: 1,
      accounts: props.accounts
    };
  }

  createExchangeTable = (exchangeRate) => {
    var table = [];
    this.state.accounts.forEach(function(account) {
      var row = [];
      row.push(<TableCell>{account.name}</TableCell>);
      row.push(<TableCell>{account.balance * exchangeRate}</TableCell>);
      table.push(<TableRow>{row}</TableRow>);
    });

    return table;
  };

  selectItem = item => {
    this.setState({
      selectedAccount: item
    });
  };

  selectCurrency = currency => {
    this.setState({
      selectedCurrency: currency.name,
      exchangeRate: currency.rate
    });
  };



  render() {
    return (
      <div className="section-container">
<<<<<<< HEAD
        <h1>Global Exchange</h1>
        <p>
          Bankr now allows you to compare your account values to current
          conversion rates. Please keep in mind this is a tool created to help
          you visualize the value of your accounts at an international level. By
          no means is Bankr converting your currency while using this tool.
        </p>
        <div className="input-group">
          <Dropdown
            label="Select Account:"
            select={this.selectItem}
            selected={this.state.selectedAccount}
            list={this.props.accounts}
          />
        </div>
=======
        <h1>Compare Value of Your Accounts in Different Currencies</h1>
>>>>>>> 4f70d4d5cf28bec37ef23e33b3c53baa287d1672

        <div className="input-group">
          What currency would you like to use?
          <Dropdown
            select={this.selectCurrency}
            list={[{ name: "CAD", rate: 1 }, { name: "USD", rate: 0.75 }, { name: "EUR", rate: .67 }]}
          />
        </div>
        <h1>
          Accounts:
        </h1>
<<<<<<< HEAD

        <div className="footer">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 286.054 286.054"
          >
            <path
              style={{ fill: "#E2574C" }}
              d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027   c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236   c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209   S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972   c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723   c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843   C160.878,195.732,152.878,187.723,143.036,187.723z"
            />
          </svg>
          <p>
            Psst! Bankr is constantly adding support for new currencies and
            features! Check back soon!
          </p>
        </div>
=======
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Balance in {this.state.selectedCurrency}</TableCell>
            </TableRow>
          </TableHead>
        {this.createExchangeTable(this.state.exchangeRate)}
        </Table>
>>>>>>> 4f70d4d5cf28bec37ef23e33b3c53baa287d1672
      </div>
    );
  }
}

CurrencyExchange.propTypes = {
  accounts: PropTypes.array
};
