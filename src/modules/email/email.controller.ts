import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('email')
@ApiTags('Email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  @ApiOperation({ summary: 'Send an email' })
  @ApiResponse({
    status: 200,
    description: 'Email sent successfully',
    schema: {
      type: 'object',
      properties: {
        messageId: {
          type: 'string',
          example: '<123456@example.com>',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid email options provided',
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to send email',
  })
  async sendEmail(@Body() emailDto: SendEmailDto) {
    return await this.emailService.sendEmail(emailDto);
  }
}
