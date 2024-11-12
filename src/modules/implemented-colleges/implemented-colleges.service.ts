import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ImplementedCollegesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.viewCPLImplementedColleges.findMany({
      orderBy: { College: 'asc' },
    });
  }
}
