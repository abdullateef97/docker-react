import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Marlians come forward, the rest fuck offf, IYE iye iye/i);
  expect(linkElement).toBeInTheDocument();
});
