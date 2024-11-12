import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PotentialCPLSavings, Prisma } from '@prisma/client';

@Injectable()
export class PotentialSavingsService {
  constructor(private prisma: PrismaService) {}

  async getPotentialCPLSavings(
    cplType: number | null,
  ): Promise<PotentialCPLSavings[]> {
    const results = await this.prisma.$queryRaw<PotentialCPLSavings[]>`
      EXEC GetPotentialCPLSavings @cpltype = ${
        cplType === null ? Prisma.sql`NULL` : cplType
      }
    `;

    if (results.length === 0) {
      throw new NotFoundException('No data found');
    }

    return results;
  }
}
