import React from 'react';
import CounterButton from './CounterButton';
import { shallow } from 'enzyme'; 
import toJson from 'enzyme-to-json';

it('expect to match snapshot', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('can correctly increase the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1});
  expect(wrapper.props().color).toBe('red');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2});
});