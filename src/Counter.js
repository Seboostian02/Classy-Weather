import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDrecement = this.handleDrecement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDrecement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2033");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDrecement}>-</button>
        <span>
          {date.toDateString()}[ {this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
