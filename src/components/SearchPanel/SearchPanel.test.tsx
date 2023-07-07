import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import SearchPanel, { SearchPanelProps } from './SearchPanel';

const mockSubmit = jest.fn();
const defaultProps: SearchPanelProps = {
  onSubmit: mockSubmit,
};

describe('SearchPanel', () => {
  it('renders search panel correctly', () => {
    render(<SearchPanel {...defaultProps} />);

    const textFieldElement = screen.getByPlaceholderText('What are you looking for?');
    const usernameToggleButton = screen.getByRole('button', { name: /Username/i });
    const userIdToggleButton = screen.getByRole('button', { name: /User id/i });
    const bodyToggleButton = screen.getByRole('button', { name: /Body/i });

    expect(textFieldElement).toBeInTheDocument();
    expect(usernameToggleButton).toBeInTheDocument();
    expect(userIdToggleButton).toBeInTheDocument();
    expect(bodyToggleButton).toBeInTheDocument();
  });

  it('triggers the onSubmit callback with the input value and selected default filter when input text changes', () => {
    render(<SearchPanel {...defaultProps} />);

    const textFieldElement = screen.getByPlaceholderText('What are you looking for?');

    fireEvent.change(textFieldElement, { target: { value: 'test' } });

    expect(mockSubmit).toHaveBeenCalledWith('test', 'username');
  });

  it('triggers the onSubmit callback with the input value and selected filter when toggle button changes', () => {
    render(<SearchPanel {...defaultProps} />);

    const userIdToggleButton = screen.getByRole('button', { name: /User id/i });
    const usernameToggleButton = screen.getByRole('button', { name: /Username/i });
    const bodyToggleButton = screen.getByRole('button', { name: /Body/i });

    fireEvent.click(userIdToggleButton);
    expect(mockSubmit).toHaveBeenCalledWith('', 'userId');
    fireEvent.click(usernameToggleButton);
    expect(mockSubmit).toHaveBeenCalledWith('', 'username');
    fireEvent.click(bodyToggleButton);
    expect(mockSubmit).toHaveBeenCalledWith('', 'body');
  });
});
