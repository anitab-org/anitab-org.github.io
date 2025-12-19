import React from 'react';
import { render } from '@testing-library/react';
import Home from './../Components/Home';
import { ThemeProvider } from '../Context/ThemeContext';

it('should take a snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
