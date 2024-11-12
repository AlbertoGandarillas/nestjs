import { Module } from '@nestjs/common';
import { MostCommonTopcodesService } from './most-common-topcodes.service';
import { MostCommonTopcodesController } from './most-common-topcodes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MostCommonTopcodesController],
  providers: [MostCommonTopcodesService, PrismaService],
  exports: [MostCommonTopcodesService],
})
export class MostCommonTopcodesModule {}
