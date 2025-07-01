import React from 'react';
import { render } from '@testing-library/react-native';
import LaunchScreen from './launch-screen';

describe('LaunchScreen', () => {
  it('should render successfully', () => {
    const { root } = render(< LaunchScreen />);
    expect(root).toBeTruthy();
  });
});
