import React from 'react';
import CardList from './CardList';
import { shallow } from 'enzyme'; 
import toJson from 'enzyme-to-json';

it('expect to match snapshot', () => {
  const mockRobots = [{
    id: 1,
    name: 'a',
    email: 'a@a.com',
  }];
  const wrapper = shallow(<CardList robots={mockRobots}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});