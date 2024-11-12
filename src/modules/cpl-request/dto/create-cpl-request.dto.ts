import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateCPLRequestDto {
  @ApiProperty({ example: 'John', description: 'First name of the requester' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the requester' })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: true,
    description: 'Whether the user has a CCC Apply ID',
  })
  @IsBoolean()
  hasCCCApplyId: boolean;

  @ApiPropertyOptional({
    example: '12345',
    description: 'CCC Apply ID if available',
  })
  @IsOptional()
  @IsString()
  cccApplyId?: string;

  @ApiProperty({
    example: '["Course1", "Course2"]',
    description: 'JSON string of selected courses',
  })
  @IsString()
  selectedCourses: string;

  @ApiProperty({ example: 1, description: 'College ID' })
  @IsNumber()
  CollegeID: number;

  @ApiPropertyOptional({
    example: 'Additional qualifications',
    description: 'Any unlisted qualifications',
  })
  @IsOptional()
  @IsString()
  unlistedQualifications?: string;
}
