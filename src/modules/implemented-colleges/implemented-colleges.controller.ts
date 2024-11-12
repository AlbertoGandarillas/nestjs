import { Controller, Get } from '@nestjs/common';
import { ImplementedCollegesService } from './implemented-colleges.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewCPLImplementedColleges } from '@prisma/client';

@Controller('implemented-colleges')
@ApiTags('Implemented Colleges')
export class ImplementedCollegesController {
  constructor(
    private readonly implementedCollegesService: ImplementedCollegesService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all implemented colleges' })
  @ApiResponse({
    status: 200,
    description: 'Returns all Implemented Colleges',
  })
  @ApiResponse({ status: 404, description: 'No implemented colleges found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<ViewCPLImplementedColleges[]> {
    return this.implementedCollegesService.findAll();
  }
}
