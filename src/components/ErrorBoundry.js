import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    // console.log(error, info);
    this.setState({
      hasError: true, 
    });
  } 

  render() {
    const { hasError } = this.state;
    return hasError ? 
    (<h1> Opps, some errors </h1>) : this.props.children;  
  }
};