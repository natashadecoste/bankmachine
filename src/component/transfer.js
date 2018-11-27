import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";
import { Dropdown } from "./dropdown";

export class Transfer extends React.Component {
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

  render() {
    return (
      <div className="section-container">
        <h1>Transfer from Account to Account</h1>
        <div className="input-group">
          Transfer from:
          <Dropdown
            label="Select Account:"
            select={this.selectItem}
            selected={this.state.selectedAccount}
            list={this.props.accounts}
          />
        </div>
        <div className="input-group">
          Transfer to:
          <Dropdown
            label="Select Account:"
            select={this.selectItem}
            selected={this.state.selectedAccount}
            list={this.props.accounts}
          />
        </div>
        How much money to Transfer?
        <input type="text" placeholder="e.g. 45.22 or 45" />
        CAD
      </div>
    );
  }
}

Transfer.propTypes = {
  accounts: PropTypes.array
};
