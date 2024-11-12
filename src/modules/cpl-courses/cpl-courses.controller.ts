import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CPLCoursesService } from './cpl-courses.service';
import { SearchCoursesDto } from './dto/search-courses.dto';

@Controller('cpl-courses')
@ApiTags('CPL Courses')
export class CPLCoursesController {
  constructor(private readonly cplCoursesService: CPLCoursesService) {}

  @Get()
  @ApiOperation({ summary: 'Search CPL courses with filters' })
  @ApiResponse({ status: 200, description: 'Returns filtered CPL courses' })
  @ApiResponse({ status: 404, description: 'No articulations found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async searchCourses(@Query() searchDto: SearchCoursesDto) {
    return await this.cplCoursesService.searchCourses(searchDto);
  }
}
