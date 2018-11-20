import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";


export class Summary extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h1>Account Summary</h1>

        <div>
          Accounts:
          <ul className="account-list">
            {this.props.accounts.map((account, index) => (
              <li key={`item--${index}`} className="account-summary-li">
                {`${account.name}--${account.balance}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  accounts: PropTypes.array
};
