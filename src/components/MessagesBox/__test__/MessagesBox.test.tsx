import React, { useEffect } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { addComments } from '../../../store/actions/commentActions';
import { store } from '../../../store/store';
import { mockComments } from '../__mock__';
import MessagesBox from '../MessagesBox';

const MockMessageBox = () => {
  const { comments } = useTypedSelector((store) => store.comments);

  useEffect(() => {
    store.dispatch(addComments(mockComments));
  }, []);

  return <MessagesBox comments={comments} />;
};

const MockApp = () => {
  return (
    <Provider store={store}>
      <MockMessageBox />
    </Provider>
  );
};

const addReplies = (replies: string[]) => {
  const inputElement = screen.getByPlaceholderText(/input text/i);
  const sendButtonElement = screen.getByLabelText('send-button');
  replies.forEach((reply) => {
    fireEvent.change(inputElement, { target: { value: reply } });
    fireEvent.click(sendButtonElement);
  });
};

describe('MessageBox', () => {
  beforeEach(() => {
    render(<MockApp />);
  });

  it('should has no errors', () => {
    expect(MockApp).not.toThrow();
  });

  it('add new reply on message', () => {
    const onReplyButtons = screen.getAllByTestId(/reply-button/i);
    fireEvent.click(onReplyButtons[0]);

    addReplies(['reply 1', 'reply 2', 'reply 3']);

    const replyElements = screen.getAllByTestId(/reply-item/i);
    expect(replyElements.length).toBe(3);
  });
});
