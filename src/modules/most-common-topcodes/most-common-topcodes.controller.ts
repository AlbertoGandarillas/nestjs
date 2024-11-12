import { Controller, Get } from '@nestjs/common';
import { MostCommonTopcodesService } from './most-common-topcodes.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewCPLMostCommonTopCodes } from '@prisma/client';

@Controller('most-common-topcodes')
@ApiTags('Most Common Topcodes')
export class MostCommonTopcodesController {
  constructor(private readonly mostCommonTopcodesService: MostCommonTopcodesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all most common topcodes' })
  @ApiResponse({ status: 200, description: 'Returns all most common topcodes' })
  @ApiResponse({ status: 404, description: 'No most common topcodes found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<ViewCPLMostCommonTopCodes[]> {
    return this.mostCommonTopcodesService.findAll();
  }
}