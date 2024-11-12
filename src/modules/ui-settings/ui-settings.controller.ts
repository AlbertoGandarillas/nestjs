import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { UISettingsService } from './ui-settings.service';
import { CollegeUIConfig } from '@prisma/client';
@Controller('ui-settings')
@ApiTags('UI Settings')
export class UISettingsController {
  constructor(private readonly uiSettingsService: UISettingsService) {}

  @Get(':slug')
  @ApiOperation({ summary: 'Get UI settings by slug' })
  @ApiParam({ name: 'slug', description: 'College UI settings slug' })
  @ApiResponse({ status: 200, description: 'Returns UI settings for college' })
  @ApiResponse({ status: 404, description: 'UI settings not found' })
  async findBySlug(@Param('slug') slug: string): Promise<CollegeUIConfig[]> {
    try {
      return await this.uiSettingsService.findBySlug(slug);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
