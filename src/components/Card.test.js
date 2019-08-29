import React from 'react';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';


it('expect to render Card component', () => {
  const wrapper = shallow(<Card />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
