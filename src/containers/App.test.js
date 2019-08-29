import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainPage from '../components/MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: 'John',
        email: 'john@history.com',
      },
    ],
    searchField: '',
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('expect to render App component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  expect(wrapper.instance().filteredRobots()).toEqual([{
    id: 1,
    name: 'John',
    email: 'john@history.com',
  }]);
});