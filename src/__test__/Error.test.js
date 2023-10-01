import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Error from '../component/Error';

describe('Error component', () => {
  it('renders error message', () => {
    render(<Error message="An error occurred!" />);

    expect(screen.getByText('Oops, an error occurred!')).toBeInTheDocument();
    expect(screen.getByText('An error occurred!')).toBeInTheDocument();
  });

  it('calls the onRetry function when "Retry" is clicked', () => {
    const onRetryMock = jest.fn();
    render(<Error message="An error occurred!" onRetry={onRetryMock} />);

    const retryButton = screen.getByRole('button', { name: 'Retry' });
    expect(retryButton).toBeInTheDocument();

    fireEvent.click(retryButton);


    expect(onRetryMock).toHaveBeenCalled();
  });

  it('does not render "Retry" button when onRetry is not provided', () => {
    render(<Error message="An error occurred!" />);

    const retryButton = screen.queryByRole('button', { name: 'Retry' });
    expect(retryButton).toBeNull();
  });
});
