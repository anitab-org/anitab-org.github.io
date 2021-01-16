import React from 'react';
import {render} from '@testing-library/react';
import Contribute from './../Components/Contribute';

it('should take a snapshot', () => {
    const { asFragment } = render(<Contribute />);

    expect(asFragment(<Contribute />)).toMatchSnapshot();
})