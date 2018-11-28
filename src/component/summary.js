import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core/";

export class Summary extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h1>Account Summary</h1>
        <p>
          With Bankr, you can now check all your accounts in one place. Easy,
          convieniently and quickly.
        </p>

        <Paper className="bankr-paper">
          <h2>Your Accounts</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Account Name</TableCell>
                <TableCell numeric>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.accounts.map((account, index) => {
                return (
                  <TableRow key={`row--${index}`}>
                    <TableCell component="th" scope="row">
                      {account.name}
                    </TableCell>
                    <TableCell numeric>{account.balance}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Summary.propTypes = {
  accounts: PropTypes.array
};
