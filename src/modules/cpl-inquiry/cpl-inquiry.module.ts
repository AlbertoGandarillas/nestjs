import { Module } from '@nestjs/common';
import { CPLInquiryController } from './cpl-inquiry.controller';
import { CPLInquiryService } from './cpl-inquiry.service';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [CPLInquiryController],
  providers: [CPLInquiryService, ],
})
export class CPLInquiryModule {}
