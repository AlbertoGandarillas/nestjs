import { Module } from '@nestjs/common';
import { MostCommonCidsService } from './most-common-cids.service';
import { MostCommonCidsController } from './most-common-cids.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MostCommonCidsController],
  providers: [MostCommonCidsService, PrismaService],
  exports: [MostCommonCidsService],
})
export class MostCommonCidsModule {}
