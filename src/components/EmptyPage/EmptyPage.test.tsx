import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyPage, { EmptyPageProps } from './EmptyPage';

describe('EmptyPage', () => {
  it('renders the children correctly', () => {
    const children = 'No items found';
    const props: EmptyPageProps = {
      children: <>{children}</>,
    };

    render(<EmptyPage {...props} />);

    const pageTitle = screen.getByText(children);

    expect(pageTitle).toBeInTheDocument();
  });
});
