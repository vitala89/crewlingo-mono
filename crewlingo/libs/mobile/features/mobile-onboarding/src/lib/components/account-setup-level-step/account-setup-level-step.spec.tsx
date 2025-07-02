import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupLevelStep from './account-setup-level-step';

describe('AccountSetupLevelStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupLevelStep />);
    expect(root).toBeTruthy();
  });
});
