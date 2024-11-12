import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CPLRequestService } from './cpl-request.service';
import { CPLRequest } from '@prisma/client';
import { CreateCPLRequestDto } from './dto/create-cpl-request.dto';
import { UpdateCPLRequestDto } from './dto/update-cpl-request.dto';

@Controller('cpl-request')
@ApiTags('CPL Requests')
export class CPLRequestController {
  constructor(private readonly cplRequestService: CPLRequestService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new CPL request' })
  @ApiResponse({
    status: 201,
    description: 'Request created successfully',
    type: CreateCPLRequestDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() createDto: CreateCPLRequestDto): Promise<CPLRequest> {
    return await this.cplRequestService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all CPL requests' })
  @ApiResponse({ status: 200, description: 'Returns all CPL requests' })
  async findAll(): Promise<CPLRequest[]> {
    return await this.cplRequestService.findAll();
  }

  @Get('college/:collegeId')
  @ApiOperation({ summary: 'Get CPL requests by college' })
  @ApiResponse({ status: 200, description: 'Returns CPL requests for college' })
  async findByCollege(
    @Param('collegeId', ParseIntPipe) collegeId: number,
  ): Promise<CPLRequest[]> {
    return await this.cplRequestService.findByCollege(collegeId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a CPL request by ID' })
  @ApiResponse({ status: 200, description: 'Returns a CPL request' })
  @ApiResponse({ status: 404, description: 'Request not found' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<CPLRequest> {
    return await this.cplRequestService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a CPL request' })
  @ApiResponse({
    status: 200,
    description: 'Request updated successfully',
    type: UpdateCPLRequestDto,
  })
  @ApiResponse({ status: 404, description: 'Request not found' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCPLRequestDto,
  ): Promise<CPLRequest> {
    return await this.cplRequestService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a CPL request' })
  @ApiResponse({ status: 200, description: 'Request deleted successfully' })
  @ApiResponse({ status: 404, description: 'Request not found' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<CPLRequest> {
    return await this.cplRequestService.remove(id);
  }
}
