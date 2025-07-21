import { render, screen } from '@/tests/test-utils';

import { Animation } from '.';

describe('Animation', () => {
  it('should render the children', () => {
    render(<Animation isVisible={true}>Example</Animation>);

    // Assert
    screen.getByText(/Example/i);
  });
});
