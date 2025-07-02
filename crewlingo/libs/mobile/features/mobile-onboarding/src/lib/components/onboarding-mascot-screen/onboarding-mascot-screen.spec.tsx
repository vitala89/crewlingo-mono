import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingMascotScreen from './onboarding-mascot-screen';

describe('OnboardingMascotScreen', () => {
  it('should render successfully', () => {
    const { root } = render(< OnboardingMascotScreen />);
    expect(root).toBeTruthy();
  });
});
