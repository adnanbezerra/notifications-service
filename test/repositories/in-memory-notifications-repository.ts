import { Notification } from '../../src/application/entities/notifications';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
