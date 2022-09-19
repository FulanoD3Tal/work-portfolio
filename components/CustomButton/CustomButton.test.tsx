import { render, screen, waitFor } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import CustomButton from './CustomButton';

describe('Button', () => {
  it('show a label', async () => {
    render(<CustomButton />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByRole('button'));
    await waitFor(() =>
      expect(screen.queryByText(/this is a test/i)).toBeInTheDocument()
    );
  });
});
