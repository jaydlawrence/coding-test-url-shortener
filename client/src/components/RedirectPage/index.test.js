import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, { mount } from 'enzyme';
import { Alert } from '@material-ui/lab';
import { MemoryRouter, Route } from 'react-router-dom';
import { RedirectPage } from './index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const wait = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

const stub = '34ga3h';

const RenderWithRouter = ({ children }) => (
  <MemoryRouter initialEntries={[`/${stub}`]}>
    <Route path="/:stub">{children}</Route>
  </MemoryRouter>
);

RenderWithRouter.propTypes = {children: PropTypes.node.isRequired}

test('RedirectPage shows error message when bad / no URL retrieved', async () => {
  jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockReturnValue({ stub: '123' }),
  }));
  const getURLFunction = jest.fn();
  const redirectFunction = jest.fn();
  const wrapper = mount(
    <RenderWithRouter>
      <RedirectPage
        getURLFunction={getURLFunction}
        redirectFunction={redirectFunction}
      />
    </RenderWithRouter>
  );
  // wait for stuff to happen
  await wait(50);
  wrapper.update();
  expect(getURLFunction.mock.calls.length).toBe(1);
  expect(getURLFunction.mock.calls[0][0]).toBe(stub);
  expect(redirectFunction.mock.calls.length).toBe(0);
  const alert = wrapper.find(Alert);
  expect(alert).toHaveLength(1);
});

test('RedirectPage successfully redirects', async () => {
  jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockReturnValue({ stub: '123' }),
  }));
  const longUrl = 'LongUrl';
  const getURLFunction = jest.fn(() => longUrl);
  const redirectFunction = jest.fn();
  mount(
    <RenderWithRouter>
      <RedirectPage
        getURLFunction={getURLFunction}
        redirectFunction={redirectFunction}
      />
    </RenderWithRouter>
  );
  // wait for stuff to happen
  await wait(50);
  expect(getURLFunction.mock.calls.length).toBe(1);
  expect(getURLFunction.mock.calls[0][0]).toBe(stub);
  expect(redirectFunction.mock.calls.length).toBe(1);
  expect(redirectFunction.mock.calls[0][0]).toBe(longUrl);
});