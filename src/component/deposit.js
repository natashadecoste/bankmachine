import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./component-styles.scss"
import {Dropdown} from './dropdown';
import { MuiThemeProvider } from "@material-ui/core";

export class Deposit extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          selectedAccount: props.accounts[0],
          selectedCurrency: "CAD"
        };
      }
    
      selectItem = (item) => {
          this.setState({
              selectedAccount: item
          });
    
      }
    
      selectCurrency = (currency) => {
        this.setState({
            selectedCurrency: currency.name
        });
      }


    render(){
        return (
            <div className="section-container deposit">
                <h1>Account Deposit</h1>
                <Dropdown label="Select Account:" select={this.selectItem} selected={this.state.selectedAccount} list={this.props.accounts}></Dropdown>
                <div>How much money to deposit?
                <input type="text" placeholder="e.g. 45.22 or 45" /><Dropdown select={this.selectCurrency} list={[{"name": "CAD"}, {"name": "USD"}, {"name": "EUR"}]}></Dropdown>
                </div>
            </div>
        );
    }
}

Deposit.propTypes = {
    accounts: PropTypes.array,

}