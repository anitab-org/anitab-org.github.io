import React from 'react';
import {render} from '@testing-library/react';
import OurEvents from './../Components/OurEvents';

it('should take a snapshot', () => {
    const { asFragment } = render(<OurEvents />);

    expect(asFragment(<OurEvents />)).toMatchSnapshot();
})