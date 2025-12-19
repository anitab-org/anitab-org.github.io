import React from 'react';
import { render } from '@testing-library/react';
import OurEvents from './../Components/OurEvents';
import { ThemeProvider } from '../Context/ThemeContext';

it('should take a snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider>
      <OurEvents />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
