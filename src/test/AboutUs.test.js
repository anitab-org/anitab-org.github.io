import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from './../Components/AboutUs';
import { ThemeProvider } from '../Context/ThemeContext';

it('should take a snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider>
      <AboutUs />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
