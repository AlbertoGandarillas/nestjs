import { Module } from '@nestjs/common';
import { CPLLearningModesController } from './cpl-learning-modes.controller';
import { CPLLearningModesService } from './cpl-learning-modes.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CPLLearningModesController],
  providers: [CPLLearningModesService, PrismaService],
  exports: [CPLLearningModesService],
})
export class CPLLearningModesModule {}
