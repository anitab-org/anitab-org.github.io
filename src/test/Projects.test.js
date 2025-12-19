import React from 'react';
import { render } from '@testing-library/react';
import Projects from './../Components/Projects';
import { ThemeProvider } from '../Context/ThemeContext';

it('should take a snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Projects />
    </ThemeProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
