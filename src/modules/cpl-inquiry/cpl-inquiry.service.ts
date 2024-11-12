import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { CreateInquiryDto } from './dto/create-inquiry.dto';

@Injectable()
export class CPLInquiryService {
  constructor(private readonly emailService: EmailService) {}

  async createInquiry(inquiryDto: CreateInquiryDto) {
    const attachments = inquiryDto.files?.map((file) => ({
      filename: file.name,
      content: file.data.replace(/^data:.*?;base64,/, ''),
      contentType: 'application/octet-stream',
    }));

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: inquiryDto.CPLAssistantEmail,
      cc: inquiryDto.email,
      subject: 'New CPL Information Request',
      text: `
        Name: ${inquiryDto.firstName} ${inquiryDto.lastName}
        Email: ${inquiryDto.email}
        Message:
        ${inquiryDto.message}
      `,
      html: `
        <p>Name: ${inquiryDto.firstName} ${inquiryDto.lastName}</p>
        <p>Email: ${inquiryDto.email}</p>
        <p>Message:</p>
        <p>${inquiryDto.message}</p>
      `,
      attachments,
    };

    return await this.emailService.sendEmail(mailOptions);
  }
}
