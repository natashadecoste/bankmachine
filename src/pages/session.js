import React from "react";

import { Summary, Deposit, Transfer } from "./../component/";
import { Page } from "../layouts/page";
//import Material from "material";

export default class Session extends React.Component {
  account1 = { balance: 400, name: "Chequeing" };
  account2 = { balance: 150, name: "Savings" };
  accounts = [this.account1, this.account2];

  constructor(props) {
    super(props);
    this.state = { currentPage: "transfer" };

    
//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = Material.Sidenav.init(elems, options);
//   });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });
        
  }

  render() {
    return (
      <Page>
        This will hold all the values for the session
        <br />
        <nav> nothing </nav>

<ul id="slide-out" class="sidenav-fixed">
  <li><i class="material-icons">Deposit</i>First Link With Icon</li>
  <li>Second Link</li>
  <li><div class="divider"></div></li>
  <li><a class="subheader">Subheader</a></li>
  <li>Third Link With Waves</li>
</ul>
<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    
        {/* {this.state.currentPage === ("summary" || null) && (
          <Summary accounts={this.accounts} />
        )}
        {this.state.currentPage === "deposit" && (
          <Deposit accounts={this.accounts} />
        )}
        {this.state.currentPage === "transfer" && (
          <Transfer accounts={this.accounts} />
        )} */}
      </Page>
    );
  }
}
