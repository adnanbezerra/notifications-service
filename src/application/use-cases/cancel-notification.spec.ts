import { Notification } from '@application/entities/notifications';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/content';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('nova solicitacao de amizade'),
      recipientId: 'example-recipient',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: 'example-recipient' });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'example-recipient',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
