import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupCareerPathStep from './account-setup-career-path-step';

describe('AccountSetupCareerPathStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupCareerPathStep />);
    expect(root).toBeTruthy();
  });
});
