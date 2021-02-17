import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { NewURLWithCopy } from '../NewUrlWithCopy';
import { ShortenForm } from './index';
import { Input } from './styles';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const wait = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

test('ShortenForm shows error message when bad URL use submitted', async () => {
  const longUrl = 'InvalidURL';
  const shortUrl = 'faw4gg';
  const myMock = jest.fn( () => shortUrl);
  const wrapper = shallow(<ShortenForm getURLFunction={myMock} />);
  const input = wrapper.find(Input);
  input.simulate('change', { target: { value: longUrl } });
  const button = wrapper.find(Button);
  button.simulate('click');
  // wait for stuff to happen
  await wait(50);
  const alert = wrapper.find(Alert);
  expect(alert).toHaveLength(1);
  const newUrlContainer = wrapper.find(NewURLWithCopy);
  expect(newUrlContainer).toHaveLength(0);
});

test('ShortenForm shows new URL container when submitting valid URL', async () => {
  const longUrl = 'https://jestjs.io/docs/en/mock-functions';
  const shortUrl = 'faw4gg';
  const myMock = jest.fn( () => shortUrl);
  const wrapper = shallow(<ShortenForm getURLFunction={myMock} />);
  const input = wrapper.find(Input);
  input.simulate('change', { target: { value: longUrl } });
  const button = wrapper.find(Button);
  button.simulate('click');
  // wait for stuff to happen
  await wait(50);
  const alert = wrapper.find(Alert);
  expect(alert).toHaveLength(0);
  const newUrlContainer = wrapper.find(NewURLWithCopy);
  expect(newUrlContainer).toHaveLength(1);
});