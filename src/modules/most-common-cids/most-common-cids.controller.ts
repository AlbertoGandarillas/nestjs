import { Controller, Get } from '@nestjs/common';
import { MostCommonCidsService } from './most-common-cids.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewCPLMostCommonCIDs } from '@prisma/client';

@Controller('most-common-cids')
@ApiTags('Most Common Cids')
export class MostCommonCidsController {
  constructor(private readonly mostCommonCidsService: MostCommonCidsService) {}
  @Get()
  @ApiOperation({ summary: 'Get all most common cids' })
  @ApiResponse({ status: 200, description: 'Returns all most common cids' })
  @ApiResponse({ status: 404, description: 'No most common cids found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<ViewCPLMostCommonCIDs[]> {
    return this.mostCommonCidsService.findAll();
  }
}
