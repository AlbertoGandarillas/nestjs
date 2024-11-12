import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CPLArticulationsService } from './cpl-articulations.service';
import { SearchArticulationsDto } from './dto/search-articulations.dto';

@Controller('cpl-articulations')
@ApiTags('CPL Articulations')
export class CPLArticulationsController {
  constructor(
    private readonly cplArticulationsService: CPLArticulationsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Search CPL articulations with filters' })
  @ApiResponse({
    status: 200,
    description: 'Returns filtered CPL articulations',
  })
  @ApiResponse({ status: 404, description: 'No articulations found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async searchArticulations(@Query() searchDto: SearchArticulationsDto) {
    return await this.cplArticulationsService.searchArticulations(searchDto);
  }
}
