import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupModeStep from './account-setup-mode-step';

describe('AccountSetupModeStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupModeStep />);
    expect(root).toBeTruthy();
  });
});
