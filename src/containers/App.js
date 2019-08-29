import React, {Component} from 'react';
import { setSearchField, requestRobots} from '../actions';
import { connect } from 'react-redux';

import MainPage from '../components/MainPage';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => {
      dispatch(requestRobots())
    },
  };
}

class App extends Component {

  render() {
    // this.props refers to the props that get from mapStateToProps and mapDispatchToProps
    return <MainPage { ...this.props }/>; 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);