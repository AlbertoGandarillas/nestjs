import { Controller, Get } from '@nestjs/common';
import { MostCommonCrsService } from './most-common-crs.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewCPLMostCommonCreditRecommendations } from '@prisma/client';

@Controller('most-common-crs')
@ApiTags('Most Common Crs')
export class MostCommonCrsController {
  constructor(private readonly mostCommonCrsService: MostCommonCrsService) {}
  @Get()
  @ApiOperation({ summary: 'Get all most common credit recommendations' })
  @ApiResponse({ status: 200, description: 'Returns all most common credit recommendations' })
  @ApiResponse({ status: 404, description: 'No most common credit recommendations found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<ViewCPLMostCommonCreditRecommendations[]> {
    return this.mostCommonCrsService.findAll();
  }
}
