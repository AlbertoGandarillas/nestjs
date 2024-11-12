import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { SearchArticulationsDto } from './dto/search-articulations.dto';

@Injectable()
export class CPLArticulationsService {
  constructor(private prisma: PrismaService) {}

  async searchArticulations(searchDto: SearchArticulationsDto) {
    try {
      const where: Prisma.ViewCPLArticulationsWhereInput = {};

      const page = Number(searchDto.page) || 1;
      const limit = Number(searchDto.limit) || 20;

      if (searchDto.college) {
        where.CollegeID = parseInt(searchDto.college);
      }
      if (searchDto.cplType) {
        where.CPLType = parseInt(searchDto.cplType);
      }
      if (searchDto.learningMode) {
        where.ModelOfLearning = parseInt(searchDto.learningMode);
      }
      if (searchDto.criteria) {
        where.Criteria = searchDto.criteria;
      }
      if (searchDto.topCode) {
        where.TopCode = parseInt(searchDto.topCode);
      }
      if (searchDto.cidNumber) {
        where.CIDNumber = searchDto.cidNumber;
      }
      if (searchDto.searchTerm) {
        where.OR = [
          { Subject: { contains: searchDto.searchTerm } },
          { College: { contains: searchDto.searchTerm } },
          { CourseNumber: { contains: searchDto.searchTerm } },
          { CourseTitle: { contains: searchDto.searchTerm } },
          { AceID: { contains: searchDto.searchTerm } },
          { IndustryCertification: { contains: searchDto.searchTerm } },
          { CPLTypeDescription: { contains: searchDto.searchTerm } },
          { CPLModeofLearningDescription: { contains: searchDto.searchTerm } },
          { Criteria: { contains: searchDto.searchTerm } },
          { CIDNumber: { contains: searchDto.searchTerm } },
          { CIDDescriptor: { contains: searchDto.searchTerm } },
          { Program_Title: { contains: searchDto.searchTerm } },
          { Course: { contains: searchDto.searchTerm } },
        ];
      }

      const [totalCount, articulations] = await Promise.all([
        this.prisma.viewCPLArticulations.count({ where }),
        this.prisma.viewCPLArticulations.findMany({
          where,
          orderBy: [
            { College: 'asc' },
            { Subject: 'asc' },
            { CourseNumber: 'asc' },
          ],
          skip: (page - 1) * limit,
          take: limit,
        }),
      ]);

      if (articulations.length === 0) {
        throw new NotFoundException('No articulations found');
      }

      return {
        data: articulations,
        metadata: {
          totalCount,
          currentPage: page,
          pageSize: limit,
          totalPages: Math.ceil(totalCount / limit),
          hasMore: page * limit < totalCount,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
