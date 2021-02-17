import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { NewURLWithCopy } from './index';
import { UrlContainer } from './styles';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('NewURLWithCopy displays value correctly', () => {
  const value = 'NEW URL';
  const wrapper = shallow(<NewURLWithCopy value={value} />);
  const newUrlComponent = wrapper.find(UrlContainer);
  expect(newUrlComponent).toHaveLength(1);
  expect(newUrlComponent.text()).toEqual(value);
});