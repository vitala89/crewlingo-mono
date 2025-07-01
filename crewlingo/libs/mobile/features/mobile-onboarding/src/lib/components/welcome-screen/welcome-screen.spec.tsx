import React from 'react';
import { render } from '@testing-library/react-native';
import WelcomeScreen from './welcome-screen';

describe('WelcomeScreen', () => {
  it('should render successfully', () => {
    const { root } = render(< WelcomeScreen />);
    expect(root).toBeTruthy();
  });
});
