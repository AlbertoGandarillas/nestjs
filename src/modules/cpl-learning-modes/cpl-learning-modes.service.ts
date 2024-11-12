import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CPLModeofLearning } from '@prisma/client';

@Injectable()
export class CPLLearningModesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CPLModeofLearning[]> {
    const learningModes = await this.prisma.cPLModeofLearning.findMany({
      orderBy: { CPLModeofLearningDescription: 'asc' },
    });

    if (learningModes.length === 0) {
      throw new NotFoundException('No Learning Modes found');
    }

    return learningModes;
  }
}
