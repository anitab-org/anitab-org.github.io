import React from 'react';
import {render} from '@testing-library/react';
import AboutUs from './../Components/AboutUs';

it('should take a snapshot', () => {
    const { asFragment } = render(<AboutUs />);

    expect(asFragment(<AboutUs />)).toMatchSnapshot();
})