import { render, screen } from '@testing-library/react';
import App from './App';

/*
  The test function takes in two arguments: a test description and a anynomous function that contains the  testing code.

  To run all your tests type in the terminal the following command: npm run test.
  */

test('renders learn react link', () => {
  render(<App />); // We render the app component on the virtual browser.
  const linkElement = screen.getByText(/learn react/i); // We get a hold of an element in the "virtual/simulated screen/browser".
  expect(linkElement).toBeInTheDocument();
});
