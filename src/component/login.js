import React from "react";

export class Login extends React.Component {
    validation = () => {

    }
    render(){
        return (
            <div className="login-form">
                <input type="text" placeholder="Account Number"></input>
                <input type="password" placeholder="Password"></input>
            </div>
        );
    }

}