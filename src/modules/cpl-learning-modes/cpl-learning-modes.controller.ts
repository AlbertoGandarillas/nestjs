import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CPLLearningModesService } from './cpl-learning-modes.service';
import { CPLModeofLearning } from '@prisma/client';

@Controller('cpl-learning-modes')
@ApiTags('CPL Learning Modes')
export class CPLLearningModesController {
  constructor(
    private readonly cplLearningModesService: CPLLearningModesService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all CPL learning modes' })
  @ApiResponse({
    status: 200,
    description: 'Returns all CPL learning modes',
  })
  @ApiResponse({ status: 404, description: 'No Learning Modes found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<CPLModeofLearning[]> {
    try {
      return await this.cplLearningModesService.findAll();
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
