import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CPLInquiryService } from './cpl-inquiry.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';

@Controller('cpl-inquiry')
@ApiTags('CPL Inquiries')
export class CPLInquiryController {
  constructor(private readonly cplInquiryService: CPLInquiryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new CPL inquiry' })
  @ApiResponse({
    status: 201,
    description: 'Inquiry created and email sent successfully',
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 500, description: 'Failed to send email' })
  async create(@Body() createInquiryDto: CreateInquiryDto) {
    const info = await this.cplInquiryService.createInquiry(createInquiryDto);
    return {
      success: true,
      messageId: info.messageId,
    };
  }
}
