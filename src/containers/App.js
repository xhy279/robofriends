import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots} from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';

console.log(process.env.NODE_ENV);
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
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  render() {
    const { onSearchChange, searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter( robot => 
      robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return isPending ? 
      (<h1>Loading</h1>) :
      (
        <div className='tc'>
          <Header></Header>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);