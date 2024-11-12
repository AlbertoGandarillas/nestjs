import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class AttachmentDto {
  @ApiProperty({ description: 'Name of the file' })
  @IsString()
  filename: string;

  @ApiProperty({
    description: 'File content (base64 encoded string or Buffer)',
  })
  @IsString()
  content: string;

  @ApiPropertyOptional({ description: 'MIME type of the file' })
  @IsOptional()
  @IsString()
  contentType?: string;
}

export class SendEmailDto {
  @ApiPropertyOptional({
    description:
      'Sender email address. If not provided, default EMAIL_FROM will be used',
    example: 'sender@example.com',
  })
  @IsOptional()
  @IsEmail()
  from?: string;

  @ApiProperty({
    description:
      'Recipient email address(es). Can be a single email or comma-separated list',
    example: 'recipient@example.com',
  })
  @IsEmail({}, { each: true })
  to: string | string[];

  @ApiProperty({
    description: 'Email subject',
    example: 'Test Email Subject',
  })
  @IsString()
  subject: string;

  @ApiPropertyOptional({
    description: 'Plain text content of the email',
    example: 'This is a test email.',
  })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiPropertyOptional({
    description: 'HTML content of the email',
    example: '<h1>This is a test email.</h1>',
  })
  @IsOptional()
  @IsString()
  html?: string;

  @ApiPropertyOptional({
    description: 'Array of attachments',
    type: [AttachmentDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  attachments?: AttachmentDto[];
}
