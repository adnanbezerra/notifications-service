import { Notification } from '@application/entities/notifications';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/content';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Cancel notification', () => {
  it('should be able to count how many notifications a user has', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('nova solicitacao de amizade'),
        recipientId: 'example-recipient',
      }),
    );

    await countRecipientNotifications.execute({
      recipientId: 'example-recipient',
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    expect(() => {
      return countRecipientNotifications.execute({
        notificationId: 'example-recipient',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
