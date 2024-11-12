import { Module } from '@nestjs/common';
import { CPLTypesController } from './cpl-types.controller';
import { CPLTypesService } from './cpl-types.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CPLTypesController],
  providers: [CPLTypesService, PrismaService],
  exports: [CPLTypesService],
})
export class CPLTypesModule {}
