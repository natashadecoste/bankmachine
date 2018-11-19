import React from "react";

import {Summary, Deposit} from "./../component/"

export default class Session extends React.Component {
   account1  = {"balance": 400, "name": "Chequeing"};
   account2 = {"balance": 150, "name": "Savings"};
   accounts = [this.account1, this.account2];

   constructor(props) {
    super(props);
    this.state = {currentPage: "deposit"};
  }



    render(){
        return (
            <div className="session-container">
            This will hold all the values for the session
            {this.account1.balance}
            ===============================
            {this.state.currentPage === ("summary" || null) && <Summary accounts={this.accounts}></Summary> }
            {this.state.currentPage === ("deposit") && <Deposit accounts={this.accounts}></Deposit> }
            </div>
        );
    }
}


