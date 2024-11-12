import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MostCommonTopcodesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.viewCPLMostCommonTopCodes.findMany({
      orderBy: { Count: 'desc' },
    });
  }
}