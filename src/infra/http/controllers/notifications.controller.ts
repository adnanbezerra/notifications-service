import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
  }
}
