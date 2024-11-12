import { Module } from '@nestjs/common';
import { PotentialSavingsService } from './potential-savings.service';
import { PotentialSavingsController } from './potential-savings.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [PotentialSavingsService],
  controllers: [PotentialSavingsController],
  providers: [PotentialSavingsService, PrismaService],
})
export class PotentialSavingsModule {}
