import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupHowFoundStep from './account-setup-how-found-step';

describe('AccountSetupHowFoundStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupHowFoundStep />);
    expect(root).toBeTruthy();
  });
});
