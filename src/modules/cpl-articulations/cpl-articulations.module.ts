import { Module } from '@nestjs/common';
import { CPLArticulationsService } from './cpl-articulations.service';
import { CPLArticulationsController } from './cpl-articulations.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CPLArticulationsController],
  providers: [CPLArticulationsService, PrismaService],
  exports: [CPLArticulationsService],
})
export class CPLArticulationsModule {}
