import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupReasonStep from './account-setup-reason-step';

describe('AccountSetupReasonStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupReasonStep />);
    expect(root).toBeTruthy();
  });
});
