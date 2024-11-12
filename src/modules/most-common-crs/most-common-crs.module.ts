import { Module } from '@nestjs/common';
import { MostCommonCrsService } from './most-common-crs.service';
import { MostCommonCrsController } from './most-common-crs.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MostCommonCrsController],
  providers: [MostCommonCrsService, PrismaService],
  exports: [MostCommonCrsService],
})
export class MostCommonCrsModule {}
