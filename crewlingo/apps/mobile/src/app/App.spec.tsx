import App from './App';
import { render } from '@testing-library/react-native';
import * as React from 'react';

test('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
