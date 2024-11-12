import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SendCPLRequestService } from './send-cpl-request.service';
import { SendCPLRequestDto } from './dto/send-cpl-request.dto';

@Controller('send-cpl-request')
@ApiTags('CPL Request')
export class SendCPLRequestController {
  constructor(private readonly sendCPLRequestService: SendCPLRequestService) {}

  @Post()
  @ApiOperation({ summary: 'Send a CPL request email' })
  @ApiResponse({
    status: 201,
    description: 'CPL request email sent successfully',
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 500, description: 'Failed to send email' })
  async create(@Body() sendCPLRequestDto: SendCPLRequestDto) {
    const info =
      await this.sendCPLRequestService.sendRequest(sendCPLRequestDto);
    return {
      success: true,
      messageId: info.messageId,
    };
  }
}
