import { Module } from '@nestjs/common';
import { IndustryCertificationsService } from './industry-certifications.service';
import { IndustryCertificationsController } from './industry-certifications.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [IndustryCertificationsService],
  controllers: [IndustryCertificationsController],
  providers: [IndustryCertificationsService, PrismaService],
})
export class IndustryCertificationsModule {}
