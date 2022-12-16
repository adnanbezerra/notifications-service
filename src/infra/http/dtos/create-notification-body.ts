import { IsNotEmpty, IsUUID } from 'class-validator';
import { Content } from 'src/application/entities/content';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  content: Content;

  @IsNotEmpty()
  category: string;
}
