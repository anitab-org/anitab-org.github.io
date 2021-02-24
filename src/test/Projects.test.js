import React from 'react';
import {render} from '@testing-library/react';
import Projects from './../Components/Projects';

it('should take a snapshot', () => {
    const { asFragment } = render(<Projects />);

    expect(asFragment(<Projects />)).toMatchSnapshot();
})