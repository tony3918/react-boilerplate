import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders App', () => {
  const { getByText, queryByText } = render(<App />);
  expect(getByText(/hello/i)).toBeInTheDocument();
  expect(queryByText(/bye/i)).not.toBeInTheDocument();
});
