import { Module } from '@nestjs/common';
import { CPLRequestController } from './cpl-request.controller';
import { CPLRequestService } from './cpl-request.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CPLRequestController],
  providers: [CPLRequestService, PrismaService],
  exports: [CPLRequestService],
})
export class CPLRequestModule {}
