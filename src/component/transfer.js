import React from "react";
import PropTypes from "prop-types"
import "./component-styles.scss"

export class Transfer extends React.Component {

    render(){
        return (
            <div className="section-container">
                <h1>Transfer from Account to Account</h1>
                
                <div>Transfer from:
                    <ul className="account-list">
                        {this.props.accounts.map((account, index) => 
                            <li 
                            key={`item--${index}`}
                            className="account-summary-li" >
                                {`${account.name}--${account.balance}`}
                            </li>
                        )}
                    </ul>
                
                How much money to Transfer?
                    <input type="text" placeholder="e.g. 45.22 or 45"></input>
                </div>

                                
                <div>Transfer to:
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
            </div>
        );
    }

}

Transfer.propTypes = {
    accounts: PropTypes.array,

}