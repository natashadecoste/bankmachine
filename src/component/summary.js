import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";
import CssBaseline from "@material-ui/core/CssBaseline";

export class Summary extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="section-container">
          <h1>Account Summary</h1>
          <ul className="summary-list">
            {this.props.accounts.map((account, index) => (
              <li key={`item--${index}`} className="account-summary-li">
                {account.name}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Summary.propTypes = {
  accounts: PropTypes.array
};
