import React, { Component } from 'react';

export default class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 }; 
    }, () => {
      console.log('state udpate');
    });
  }
  render() {
    return (
      <button id="counter"
        color={this.props.color} 
        onClick={this.updateCount} >
        Count: { this.state.count }
      </button>
    )
  }
}