import { Module } from '@nestjs/common';
import { ImplementedCollegesService } from './implemented-colleges.service';
import { ImplementedCollegesController } from './implemented-colleges.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ImplementedCollegesController],
  providers: [ImplementedCollegesService, PrismaService],
  exports: [ImplementedCollegesService],
})
export class ImplementedCollegesModule {}
