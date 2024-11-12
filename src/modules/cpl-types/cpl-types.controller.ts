import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CPLTypesService } from './cpl-types.service';
import { CPLType } from '@prisma/client';

@Controller('cpl-types')
@ApiTags('CPL Types')
export class CPLTypesController {
  constructor(private readonly cplTypesService: CPLTypesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all CPL types' })
  @ApiResponse({
    status: 200,
    description: 'Returns all CPL types',
  })
  @ApiResponse({ status: 404, description: 'No CPL types found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<CPLType[]> {
    return this.cplTypesService.findAll();
  }
}
