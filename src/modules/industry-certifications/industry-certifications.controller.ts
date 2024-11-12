import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { IndustryCertificationsService } from './industry-certifications.service';
import { ViewCPLCommonQualifications } from '@prisma/client';

@Controller('industry-certifications')
@ApiTags('Industry Certifications')
export class IndustryCertificationsController {
  constructor(
    private readonly industryCertificationsService: IndustryCertificationsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get industry certifications' })
  @ApiQuery({
    name: 'collegeId',
    required: false,
    type: String,
    description: 'College ID filter',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns industry certifications',
  })
  @ApiResponse({ status: 404, description: 'No industry certifications found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(
    @Query('collegeId') collegeId?: string,
  ): Promise<ViewCPLCommonQualifications[]> {
    try {
      return await this.industryCertificationsService.findAll(collegeId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
