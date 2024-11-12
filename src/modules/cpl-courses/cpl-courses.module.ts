import { Module } from '@nestjs/common';
import { CPLCoursesController } from './cpl-courses.controller';
import { CPLCoursesService } from './cpl-courses.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CPLCoursesController],
  providers: [CPLCoursesService, PrismaService],
  exports: [CPLCoursesService],
})
export class CPLCoursesModule {}
