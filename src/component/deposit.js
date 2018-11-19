import React from "react";
import PropTypes from "prop-types"

export class Deposit extends React.Component {

    render(){
        return (
            <div className="section-container">
                <h1>Account Deposit</h1>
                
                <div>Choose an Account:
                    <ul className="account-list">
                        {this.props.accounts.map((account, index) => 
                            <li 
                            key={`item--${index}`}
                            className="account-summary-li" >
                                {`${account.name}--${account.balance}`}
                            </li>
                        )}
                    </ul>
                </div>
                <div>How much money to deposit?
                    <input type="text" placeholder="e.g. 45.22 or 45"></input>
                </div>
                        
                

            </div>
        );
    }

}

Deposit.propTypes = {
    accounts: PropTypes.array,

}