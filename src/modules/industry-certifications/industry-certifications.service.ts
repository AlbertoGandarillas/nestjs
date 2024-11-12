import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, ViewCPLCommonQualifications } from '@prisma/client';

@Injectable()
export class IndustryCertificationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(collegeId?: string): Promise<ViewCPLCommonQualifications[]> {
    const where: Prisma.ViewCPLCommonQualificationsWhereInput = {};

    if (collegeId) {
      where.CollegeID = parseInt(collegeId);
    }

    const industries = await this.prisma.viewCPLCommonQualifications.findMany({
      where,
      orderBy: { IndustryCertification: 'asc' },
    });

    if (industries.length === 0) {
      throw new NotFoundException('No articulations found');
    }

    return industries;
  }
}
