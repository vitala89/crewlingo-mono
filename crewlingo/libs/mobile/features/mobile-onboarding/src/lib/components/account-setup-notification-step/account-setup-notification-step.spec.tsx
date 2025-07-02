import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupNotificationStep from './account-setup-notification-step';

describe('AccountSetupNotificationStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupNotificationStep />);
    expect(root).toBeTruthy();
  });
});
