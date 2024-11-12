import { Module } from '@nestjs/common';
import { CollegesController } from './colleges.controller';
import { CollegesService } from './colleges.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  exports: [CollegesService],
  controllers: [CollegesController],
  providers: [CollegesService, PrismaService],
})
export class CollegesModule {}
