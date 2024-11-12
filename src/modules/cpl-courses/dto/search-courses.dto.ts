import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchCoursesDto {
  @ApiPropertyOptional({ description: 'College ID' })
  @IsOptional()
  @IsString()
  college?: string;

  @ApiPropertyOptional({ description: 'Industry certification filter' })
  @IsOptional()
  @IsString()
  industryCertification?: string;

  @ApiPropertyOptional({ description: 'CPL type filter' })
  @IsOptional()
  @IsString()
  cplType?: string;

  @ApiPropertyOptional({ description: 'Learning mode filter' })
  @IsOptional()
  @IsString()
  learningMode?: string;

  @ApiPropertyOptional({ description: 'Search term for text search' })
  @IsOptional()
  @IsString()
  searchTerm?: string;

  @ApiPropertyOptional({ description: 'Comma-separated outline IDs' })
  @IsOptional()
  @IsString()
  outlineIds?: string;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 20;
}