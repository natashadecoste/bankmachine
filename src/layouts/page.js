import React from "react";
import "./layouts.scss";

export class Page extends React.Component {
    render(){
        return (
            <div className="page-layout">
                {this.props.children}
            </div>
        )
    }
}


