import React from "react";

import { Summary, Deposit, Transfer } from "./../component/";
import { Page } from "../layouts/page";

export default class Session extends React.Component {
  account1 = { balance: 400, name: "Chequeing" };
  account2 = { balance: 150, name: "Savings" };
  accounts = [this.account1, this.account2];

  constructor(props) {
    super(props);
    this.state = { currentPage: "transfer" };
  }

  render() {
    return (
      <Page>
        This will hold all the values for the session
        <br />
        {this.state.currentPage === ("summary" || null) && (
          <Summary accounts={this.accounts} />
        )}
        {this.state.currentPage === "deposit" && (
          <Deposit accounts={this.accounts} />
        )}
        {this.state.currentPage === "transfer" && (
          <Transfer accounts={this.accounts} />
        )}
      </Page>
    );
  }
}
