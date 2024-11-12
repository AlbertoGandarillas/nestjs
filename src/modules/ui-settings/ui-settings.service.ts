import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UISettingsService {
  constructor(private prisma: PrismaService) {}

  async findBySlug(slug: string) {
    const settings = await this.prisma.collegeUIConfig.findMany({
      where: { Slug: slug },
      include: {
        College: true,
        Links: true,
        Contacts: true,
      },
    });

    if (!settings || settings.length === 0) {
      throw new NotFoundException('UI settings not found');
    }

    return settings;
  }
}
