import React from "react";
import PropTypes from "prop-types"

export class Summary extends React.Component {
    // promptUser = () => {
    //     var r = window.confirm("Are you sure you want to Exit? This will end your current banking session") 
    //     if (r === true) {
    //         console.log("You pressed OK!");
    //         // navigate back to index.js
    //         window.location.href = "/";
    //     } else {
    //         console.log("You pressed CANCEL, resuming window session..");
    //         // do nothing
    //     }
    // }
    render(){
        return (
            <div className="section-container">
                <h1>Account Summary</h1>
                <ul className="summary-list">
                    {this.props.accounts.map((account, index) => 
                        <li 
                        key={`item--${index}`}
                        className="account-summary-li" >
                            {account.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }

}

Summary.propTypes = {
    accounts: PropTypes.array,

}