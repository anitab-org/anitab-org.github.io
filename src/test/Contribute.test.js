import React from 'react';
import { render } from '@testing-library/react';
import Contribute from './../Components/Contribute';
import { ThemeProvider } from '../Context/ThemeContext';

it('should take a snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Contribute />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
