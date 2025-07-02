import React from 'react';
import { render } from '@testing-library/react-native';
import AccountSetupLanguageStep from './account-setup-language-step';

describe('AccountSetupLanguageStep', () => {
  it('should render successfully', () => {
    const { root } = render(< AccountSetupLanguageStep />);
    expect(root).toBeTruthy();
  });
});
