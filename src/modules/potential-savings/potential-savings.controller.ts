import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { PotentialSavingsService } from './potential-savings.service';
import { PotentialCPLSavings } from '@prisma/client';

@Controller('potential-savings')
@ApiTags('Potential Savings')
export class PotentialSavingsController {
  constructor(
    private readonly potentialSavingsService: PotentialSavingsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get potential CPL savings' })
  @ApiQuery({
    name: 'cpltype',
    required: false,
    type: Number,
    description: 'CPL type filter',
  })
  @ApiResponse({ status: 200, description: 'Returns potential savings data' })
  @ApiResponse({ status: 400, description: 'Invalid cpltype parameter' })
  @ApiResponse({ status: 404, description: 'No data found' })
  async getPotentialSavings(
    @Query('cpltype') cplTypeParam?: string,
  ): Promise<PotentialCPLSavings[]> {
    try {
      let cplType: number | null = null;

      if (cplTypeParam !== undefined) {
        cplType = parseInt(cplTypeParam, 10);
        if (isNaN(cplType)) {
          throw new BadRequestException('Invalid cpltype parameter');
        }
      }

      return await this.potentialSavingsService.getPotentialCPLSavings(cplType);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw error;
    }
  }
}
