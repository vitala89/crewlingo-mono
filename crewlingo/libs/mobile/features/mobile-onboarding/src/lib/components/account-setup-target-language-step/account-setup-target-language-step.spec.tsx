import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupTargetLanguageStep from './account-setup-target-language-step';

describe('AccountSetupTargetLanguageStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupTargetLanguageStep />);
    expect(root).toBeTruthy();
  });
});
