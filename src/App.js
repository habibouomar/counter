import React from "react";
import './styles/global.css';
import { Counter } from "./components/Counter";

export default class count extends React.Component {
  constructor() {
    super();
    this.state = {  // Ne pas oublier "this" !
      count: 0
    };
  }

  decrementCount = () => {

    this.setState({
      count: this.state.count - 1
    })
  }

  incrementCount = () => {

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {

    return (

      <div>
        <h1>COUNTER</h1>
        <Counter count={this.state.count} add={this.incrementCount} reduce={this.decrementCount}/>
      </div>

    )
  }
}