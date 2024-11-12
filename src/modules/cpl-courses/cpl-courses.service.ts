import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, ViewCPLCourses } from '@prisma/client';
import { SearchCoursesDto } from './dto/search-courses.dto';

@Injectable()
export class CPLCoursesService {
  constructor(private prisma: PrismaService) {}

  async searchCourses(searchDto: SearchCoursesDto) {
    try {
      const where: Prisma.ViewCPLCoursesWhereInput = {};

      const page = Number(searchDto.page) || 1;
      const limit = Number(searchDto.limit) || 20;

      if (searchDto.college) {
        where.CollegeID = parseInt(searchDto.college);
      }

      // Handle outline IDs for selected courses
      if (searchDto.outlineIds) {
        where.OutlineID = {
          in: searchDto.outlineIds.split(',').map((id) => parseInt(id)),
        };

        const selectedCourses = await this.prisma.viewCPLCourses.findMany({
          where,
          include: {
            IndustryCertifications: {
              include: {
                Evidences: true,
                CreditRecommendations: true,
              },
            },
          },
          orderBy: [{ Subject: 'asc' }, { CourseNumber: 'asc' }],
        });

        return {
          data: selectedCourses,
          metadata: {
            totalCount: selectedCourses.length,
            currentPage: 1,
            pageSize: selectedCourses.length,
            totalPages: 1,
            hasMore: false,
          },
        };
      }

      if (
        searchDto.industryCertification ||
        searchDto.cplType ||
        searchDto.learningMode
      ) {
        where.IndustryCertifications = {
          some: {
            ...(searchDto.industryCertification && {
              IndustryCertification: {
                contains: searchDto.industryCertification,
              },
            }),
            ...(searchDto.cplType && {
              CPLType: { equals: parseInt(searchDto.cplType) },
            }),
            ...(searchDto.learningMode && {
              ModelOfLearning: { equals: parseInt(searchDto.learningMode) },
            }),
          },
        };
      }

      if (searchDto.searchTerm) {
        where.OR = [
          { Course: { contains: searchDto.searchTerm } },
          { Subject: { contains: searchDto.searchTerm } },
          { College: { contains: searchDto.searchTerm } },
          { CourseTitle: { contains: searchDto.searchTerm } },
          {
            IndustryCertifications: {
              some: {
                OR: [
                  { IndustryCertification: { contains: searchDto.searchTerm } },
                  { CPLTypeDescription: { contains: searchDto.searchTerm } },
                  {
                    CPLModeofLearningDescription: {
                      contains: searchDto.searchTerm,
                    },
                  },
                ],
              },
            },
          },
        ];
      }

      const [totalCount, courses] = await Promise.all([
        this.prisma.viewCPLCourses.count({ where }),
        this.prisma.viewCPLCourses.findMany({
          where,
          include: {
            IndustryCertifications: {
              include: {
                Evidences: true,
                CreditRecommendations: true,
              },
            },
          },
          orderBy: [{ Subject: 'asc' }, { CourseNumber: 'asc' }],
          skip: (page - 1) * limit,
          take: limit,
        }),
      ]);

      if (courses.length === 0) {
        throw new NotFoundException('No articulations found');
      }

      return {
        data: courses,
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
      if (error.message?.includes('maximum of 2100 parameters')) {
        throw new BadRequestException(
          'The result of your search is too large. Please adjust your search criteria to narrow down the results.',
        );
      }
      throw error;
    }
  }
}
