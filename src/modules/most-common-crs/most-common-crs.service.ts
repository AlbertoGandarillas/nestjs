import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MostCommonCrsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.viewCPLMostCommonCreditRecommendations.findMany({
      orderBy: { Count: 'desc' },
    });
  }
}
