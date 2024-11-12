import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class FileAttachmentDto {
  @ApiProperty({ description: 'File name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Base64 encoded file data' })
  @IsString()
  data: string;
}

class CourseWithCertificationsDto {
  @ApiProperty({ description: 'Course name' })
  @IsString()
  course: string;

  @ApiProperty({ description: 'List of certifications', type: [String] })
  @IsArray()
  @IsString({ each: true })
  certifications: string[];
}

export class SendCPLRequestDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'cpl.assistant@college.edu' })
  @IsEmail()
  CPLAssistantEmail: string;

  @ApiProperty({ type: [CourseWithCertificationsDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CourseWithCertificationsDto)
  selectedCourses: CourseWithCertificationsDto[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cccApplyId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unlistedQualifications?: string;

  @ApiPropertyOptional({ type: [FileAttachmentDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileAttachmentDto)
  files?: FileAttachmentDto[];
}
