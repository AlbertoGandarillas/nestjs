import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchArticulationsDto {
  @ApiPropertyOptional({ description: 'College ID' })
  @IsOptional()
  @IsString()
  college?: string;

  @ApiPropertyOptional({ description: 'CPL type filter' })
  @IsOptional()
  @IsString()
  cplType?: string;

  @ApiPropertyOptional({ description: 'Learning mode filter' })
  @IsOptional()
  @IsString()
  learningMode?: string;

  @ApiPropertyOptional({ description: 'Criteria filter' })
  @IsOptional()
  @IsString()
  criteria?: string;

  @ApiPropertyOptional({ description: 'TOP code filter' })
  @IsOptional()
  @IsString()
  topCode?: string;

  @ApiPropertyOptional({ description: 'CID number filter' })
  @IsOptional()
  @IsString()
  cidNumber?: string;

  @ApiPropertyOptional({ description: 'Search term for text search' })
  @IsOptional()
  @IsString()
  searchTerm?: string;

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
