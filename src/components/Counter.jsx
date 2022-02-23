import React from "react";

export class Counter extends React.Component {

    render(){

        return <div>

        <h2>{this.props.count}</h2>

        <button onClick={this.props.reduce} className="red">-</button>
        <button onClick={this.props.add} className="green">+</button>
        
    </div>
    
    }
}