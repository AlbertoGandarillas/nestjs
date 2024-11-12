import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { LookupColleges } from '@prisma/client';

@Injectable()
export class CollegesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<LookupColleges[]> {
    return await this.prisma.lookupColleges.findMany({
      orderBy: { College: 'asc' },
      where: {
        CollegeID: {
          notIn: [4, 5, 63, 120],
        },
      },
    });
  }
}
