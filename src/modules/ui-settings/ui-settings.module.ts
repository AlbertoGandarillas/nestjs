import { Module } from '@nestjs/common';
import { UISettingsService } from './ui-settings.service';
import { UISettingsController } from './ui-settings.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [UISettingsService],
  controllers: [UISettingsController],
  providers: [UISettingsService, PrismaService],
})
export class UiSettingsModule {}
