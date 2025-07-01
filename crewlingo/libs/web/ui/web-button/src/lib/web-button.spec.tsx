import CrewlingoWebButton from './web-button';
import { render } from '@testing-library/react';

describe('CrewlingoWebButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrewlingoWebButton />);
    expect(baseElement).toBeTruthy();
  });
});
