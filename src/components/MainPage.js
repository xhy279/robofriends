import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import '../containers/App.css';

class MainPage extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter( robot => 
      robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
  }

  render() {
    const { onSearchChange, isPending } = this.props;
    return isPending ? 
      (<h1>Loading</h1>) :
      (
        <div className='tc'>
          <Header></Header>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
};

export default MainPage;