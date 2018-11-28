import React from "react";
import "./component-styles.scss"; // put your styles in here
import { Button, TextField, Select } from "@material-ui/core/"; // add in components from Material UI
import { Chevron } from "./../icons/chevron";
import PropTypes from "prop-types";

export class Loans extends React.Component {
  constructor(props) {
    super(props); // leave this ignore it

    //this.props holds all the passed in variables to the class (if any)

    // initialize things including the state (which is only component level == no access to changing the overall account balances)

    this.state = {
      statething1: "hello",
      statething2: "world"
    };
    // notice most things use JSON or Object notation
  }

  checkFields = amt => {
    var first = document.getElementById("f_Name").value;
    var last = document.getElementById("l_Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_num").value;
    var reason = document.getElementById("loan_Reason").value;

    if (amt < 0 || isNaN(amt) || amt === ''){
      alert("Sorry, please enter a postive number for the loan amount.");
      return false;
    }

    

    if (first === '' || last === '' || email === '' || phone === '' || reason === '' ){
      alert("Sorry, please ensure that you have filled out all required fields.")
      return false
    }

    if (phone.length != 10){
      alert("Please enter a 10-digit phone number.")
      return false
    }

    return true;
  };

  handleClick = () => {
    var amt = document.getElementById("loan_Amt").value;
    if (this.checkFields(amt)) {
      document.getElementById("f_Name").value = '';
      document.getElementById("l_Name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("phone_num").value = '';
      document.getElementById("loan_Reason").value = '';
      document.getElementById("loan_Amt").value = '';
      alert("Success! Your application has been submitted. A representative will contact you by e-mail within 3 business days.")

    }
  };

  //THIS IS THE HTML PART, it can be html items like <p> or imported react ones
  // FYI each render has to have ONE element containing children
  // ex: render(<p>{children}</p>) is OK but render(<p>{children}</p><h1></h1>) is NOT ok because p and h1 are siblings without one containing element

  // keep in mind this is JSX notation which resembles HTML but somethings are different class = className, onclick=onClick (most things are camelcase) is the most common ones, 'id' and others are the same
  render() {
 
    return (
      <div className="section-container">
        <form className="">
          Preliminary Loan Application
          <div className="input-group">
          <TextField
            required
            id="f_Name"
            label="First name"
            margin="normal"
          />
          <br></br>
          <TextField
            required
            id="l_Name"
            label="Last name"
            margin="normal"
          />
          <br></br>
          <TextField
            required
            id="email"
            label="E-mail"
            margin="normal"
          />
          <br></br>
          <TextField
            required
            id="phone_num"
            label="Phone Number"
            margin="normal"
          />
          <br></br>
          <TextField
            required
            id="loan_Amt"
            label="Requested Amount"
            margin="normal"
          />

          <br></br>
          <TextField
            required
            id="loan_Reason"
            label="Reason for loan"
            margin="normal"
          />
          <br></br>
          <br></br>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={this.handleClick}
            className="cta"
        >   
            Submit
            <Chevron />
          </Button>
          
        </div>
        </form>
      </div>
    );
  }
}
