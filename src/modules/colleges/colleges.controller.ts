import {
  Controller,
  Get,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CollegesService } from './colleges.service';
import { LookupColleges } from '@prisma/client';

@Controller('colleges')
@ApiTags('Colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all colleges' })
  @ApiResponse({ status: 200, description: 'Returns all Colleges' })
  @ApiResponse({ status: 404, description: 'No colleges found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<LookupColleges[]> {
    try {
      const colleges = await this.collegesService.findAll();
      if (colleges.length === 0) {
        throw new NotFoundException('No colleges found');
      }
      return colleges;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
