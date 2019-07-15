import React, { Component } from 'react';
import CounterButton from './CounterButton';

export default class Header extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false; 
  }

  render() {
    return (
      <div>
        <CounterButton color={'red'}></CounterButton>
        <h1 className="f1">Robofriends</h1>
      </div>
    )
  }
}