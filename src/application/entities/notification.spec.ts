import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('olá meu compadre'),
      category: 'social',
      recipientId: 'example-recipient-id',
      readAt: null,
    });

    expect(notification).toBeTruthy;
  });
});
