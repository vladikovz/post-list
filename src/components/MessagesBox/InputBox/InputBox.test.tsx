import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import InputBox, { InputBoxProps } from './InputBox';

const mockSubmit = jest.fn();
const defaultProps: InputBoxProps = {
  onSubmit: mockSubmit,
};

describe('InputBox', () => {
  beforeEach(() => {
    render(<InputBox {...defaultProps} />);
  });

  it('renders input box correctly', () => {
    const inputElement = screen.getByPlaceholderText('Input text');
    const sendButtonElement = screen.getByLabelText('send-button');

    expect(inputElement).toBeInTheDocument();
    expect(sendButtonElement).toBeInTheDocument();
  });

  it('triggers the onSubmit callback with the input value when send button is clicked', () => {
    const inputElement = screen.getByPlaceholderText('Input text');
    const sendButtonElement = screen.getByLabelText('send-button');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(sendButtonElement);

    expect(mockSubmit).toHaveBeenCalledWith('test');
  });

  it('clears the input value after submitting', () => {
    const inputElement = screen.getByPlaceholderText('Input text');
    const sendButtonElement = screen.getByLabelText('send-button');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(sendButtonElement);

    expect(inputElement).toHaveValue('');
  });
});
