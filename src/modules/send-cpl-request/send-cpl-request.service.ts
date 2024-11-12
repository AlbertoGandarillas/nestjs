import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { SendCPLRequestDto } from './dto/send-cpl-request.dto';

@Injectable()
export class SendCPLRequestService {
  constructor(private readonly emailService: EmailService) {}

  async sendRequest(requestDto: SendCPLRequestDto) {
    const attachments = requestDto.files?.map((file) => ({
      filename: file.name,
      content: file.data.replace(/^data:.*?;base64,/, ''),
      encoding: 'base64',
    }));

    const coursesHtml = requestDto.selectedCourses
      .map(
        ({ course, certifications }) => `
      <li>
        ${course}
        ${
          certifications.length > 0
            ? `
          <ul>
            ${certifications.map((cert) => `<li>${cert}</li>`).join('')}
          </ul>
        `
            : ''
        }
      </li>
    `,
      )
      .join('');

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: requestDto.CPLAssistantEmail,
      cc: requestDto.email,
      subject: 'New CPL Information Request',
      text: `
        Name: ${requestDto.firstName} ${requestDto.lastName}
        Email: ${requestDto.email}
        CCC Apply ID: ${requestDto.cccApplyId || 'None provided'}
        Selected Courses:
        ${requestDto.selectedCourses.map((c) => c.course).join('\n')}
        Unlisted Qualifications:
        ${requestDto.unlistedQualifications || 'None provided'}
      `,
      html: `
        <p>Hello,</p>
        <p>My name is ${requestDto.firstName} ${requestDto.lastName}${
          requestDto.cccApplyId
            ? `, and I have a CCCApply ID: ${requestDto.cccApplyId}`
            : ''
        }. I am interested in receiving a CPL review for the following courses:</p>
        <ul>
          ${coursesHtml}
        </ul>
        ${
          requestDto.unlistedQualifications
            ? `
          <p>Additionally, I have the following unlisted qualifications:</p>
          <p>${requestDto.unlistedQualifications}</p>
        `
            : ''
        }
        ${
          attachments?.length > 0
            ? `<p>I have attached the evidence I have available and look forward to hearing from you soon!</p>`
            : ''
        }    
        <p>Thanks,</p>
        <p>${requestDto.firstName} ${requestDto.lastName}</p>
        <p>${requestDto.email}</p>
      `,
      attachments,
    };

    return await this.emailService.sendEmail(mailOptions);
  }
}
