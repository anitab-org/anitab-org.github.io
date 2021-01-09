import React from 'react';
import {render} from '@testing-library/react';
import Home from './../Components/Home';

it('should take a snapshot', () => {
    const { asFragment } = render(<Home />);

    expect(asFragment(<Home />)).toMatchSnapshot();
})