import React from "react";
import PropTypes from "prop-types";
import "./component-styles.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core/";

export class Summary extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h1>Account Summary</h1>
        <p>Check all your accounts.</p>

        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Account Name</TableCell>
                <TableCell numeric>Balance</TableCell>
                {/* <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell> */}
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
                    {/* <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  accounts: PropTypes.array
};
