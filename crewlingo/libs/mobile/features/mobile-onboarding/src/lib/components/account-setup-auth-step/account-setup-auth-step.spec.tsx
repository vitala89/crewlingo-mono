import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupAuthStep from './account-setup-auth-step';

describe('AccountSetupAuthStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupAuthStep />);
    expect(root).toBeTruthy();
  });
});
