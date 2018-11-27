import React from "react";
import "./component-styles.scss"; // put your styles in here
import { Button, TextField } from "@material-ui/core/"; // add in components from Material UI

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

  //THIS IS THE HTML PART, it can be html items like <p> or imported react ones
  // FYI each render has to have ONE element containing children
  // ex: render(<p>{children}</p>) is OK but render(<p>{children}</p><h1></h1>) is NOT ok because p and h1 are siblings without one containing element

  // keep in mind this is JSX notation which resembles HTML but somethings are different class = className, onclick=onClick (most things are camelcase) is the most common ones, 'id' and others are the same
  render() {
    return (
      <div className="section-container">
        <form className="">
          try to use as many Material UI elements as you can instead of native
          html form, inputs, etc. (see other components)
        </form>
      </div>
    );
  }
}
