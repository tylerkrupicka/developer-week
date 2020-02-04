import React from 'react';
import { render } from '@testing-library/react';
import DeveloperWeek from '.';

describe('DeveloperWeek', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<DeveloperWeek />);
    expect(container).toMatchSnapshot();
  });  
});