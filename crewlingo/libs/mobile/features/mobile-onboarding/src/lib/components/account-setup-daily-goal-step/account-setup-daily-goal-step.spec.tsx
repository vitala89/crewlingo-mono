import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupDailyGoalStep from './account-setup-daily-goal-step';

describe('AccountSetupDailyGoalStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupDailyGoalStep />);
    expect(root).toBeTruthy();
  });
});
