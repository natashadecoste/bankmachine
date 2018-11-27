import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";

export class CurrencyExchange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccount: props.accounts[0],
      selectedCurrency: "CAD",
      exchangeRate: 1
    };
  }

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
          <Dropdown
            label="Select Account:"
            select={this.selectItem}
            selected={this.state.selectedAccount}
            list={this.props.accounts}
          />
        </div>

        <div className="input-group">
          What currency would you like to use?
          <Dropdown
            select={this.selectCurrency}
            list={[{ name: "CAD" }, { name: "USD" }, { name: "EUR" }]}
          />
        </div>
        <h1>
          The Value of your {this.state.selectedAccount.name} account in{" "}
          {this.state.selectedCurrency} is{" "}
        </h1>
      </div>
    );
  }
}

CurrencyExchange.propTypes = {
  accounts: PropTypes.array
};
