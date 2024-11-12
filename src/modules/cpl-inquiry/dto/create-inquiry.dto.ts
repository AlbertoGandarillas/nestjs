import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsArray, IsOptional } from 'class-validator';

class FileAttachmentDto {
  @ApiProperty({ description: 'File name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Base64 encoded file data' })
  @IsString()
  data: string;
}

export class CreateInquiryDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Inquiry message' })
  @IsString()
  message: string;

  @ApiProperty({ example: 'cpl.assistant@college.edu' })
  @IsEmail()
  CPLAssistantEmail: string;

  @ApiProperty({ type: [FileAttachmentDto], required: false })
  @IsOptional()
  @IsArray()
  files?: FileAttachmentDto[];
}
