import { Module } from '@nestjs/common';
import { SendCPLRequestController } from './send-cpl-request.controller';
import { SendCPLRequestService } from './send-cpl-request.service';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [SendCPLRequestController],
  providers: [SendCPLRequestService],
})
export class SendCPLRequestModule {}
