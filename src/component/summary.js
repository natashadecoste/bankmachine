import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from '@material-ui/core/Drawer';

export class Summary extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Drawer open={true}>
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
        </Drawer>
      </React.Fragment>
    );
  }
}

Summary.propTypes = {
  accounts: PropTypes.array
};
