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
        <h1>Compare Value of Your Accounts in Different Currencies</h1>

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Balance in {this.state.selectedCurrency}</TableCell>
            </TableRow>
          </TableHead>
        {this.createExchangeTable(this.state.exchangeRate)}
        </Table>
      </div>
    );
  }
}

CurrencyExchange.propTypes = {
  accounts: PropTypes.array
};
