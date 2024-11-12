import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ViewCPLMostCommonCIDs } from '@prisma/client';
@Injectable()
export class MostCommonCidsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.viewCPLMostCommonCIDs.findMany({
      orderBy: { Count: 'desc' },
    });
  }
}
