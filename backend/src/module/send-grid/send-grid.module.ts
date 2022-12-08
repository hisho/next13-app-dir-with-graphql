import { Module } from '@nestjs/common';
import { SendGridService } from './send-grid.service';
import { SendGridResolver } from './send-grid.resolver';

@Module({
  providers: [SendGridResolver, SendGridService],
})
export class SendGridModule {}
