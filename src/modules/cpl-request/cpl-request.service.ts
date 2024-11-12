import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CPLRequest, Prisma } from '@prisma/client';
import { UpdateCPLRequestDto } from './dto/update-cpl-request.dto';
import { CreateCPLRequestDto } from './dto/create-cpl-request.dto';

@Injectable()
export class CPLRequestService {
  constructor(private prisma: PrismaService) {}

  // Create
  async create(createDto: CreateCPLRequestDto): Promise<CPLRequest> {
    try {
      return await this.prisma.cPLRequest.create({
        data: {
          ...createDto,
          selectedCourses: JSON.stringify(createDto.selectedCourses),
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to create CPL request');
    }
  }

  // Read all
  async findAll(): Promise<CPLRequest[]> {
    return await this.prisma.cPLRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Read one
  async findOne(id: number): Promise<CPLRequest> {
    const request = await this.prisma.cPLRequest.findUnique({
      where: { id: id },
    });

    if (!request) {
      throw new NotFoundException(`CPL request with ID ${id} not found`);
    }

    return request;
  }

  // Read by college
  async findByCollege(collegeId: number): Promise<CPLRequest[]> {
    return await this.prisma.cPLRequest.findMany({
      where: { CollegeID: collegeId },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Update
  async update(
    id: number,
    updateDto: UpdateCPLRequestDto,
  ): Promise<CPLRequest> {
    try {
      return await this.prisma.cPLRequest.update({
        where: { id: id },
        data: updateDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`CPL request with ID ${id} not found`);
        }
      }
      throw new BadRequestException('Failed to update CPL request');
    }
  }

  // Delete
  async remove(id: number): Promise<CPLRequest> {
    try {
      return await this.prisma.cPLRequest.delete({
        where: { id: id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`CPL request with ID ${id} not found`);
        }
      }
      throw new BadRequestException('Failed to delete CPL request');
    }
  }
}
