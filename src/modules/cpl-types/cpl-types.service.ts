import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CPLTypesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const cplTypes = await this.prisma.cPLType.findMany({
        orderBy: { CPLTypeDescription: 'asc' },
      });

      if (cplTypes.length === 0) {
        throw new NotFoundException('No types found');
      }

      return cplTypes;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
