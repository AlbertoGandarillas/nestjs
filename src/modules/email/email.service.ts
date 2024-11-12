import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
}

export interface EmailOptions
  extends Omit<nodemailer.SendMailOptions, 'attachments'> {
  attachments?: EmailAttachment[];
}

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true,
    });
  }

  async sendEmail(options: EmailOptions) {
    try {
      if (!options.from) {
        options.from = process.env.EMAIL_FROM;
      }

      this.logger.log(`Attempting to send email to: ${options.to}`);
      this.logger.debug('Email options:', {
        from: options.from,
        to: options.to,
        subject: options.subject,
      });

      const info = await this.transporter.sendMail({
        ...options,
        attachments: options.attachments?.map((attachment) => ({
          ...attachment,
          content:
            typeof attachment.content === 'string'
              ? Buffer.from(attachment.content, 'base64')
              : attachment.content,
        })),
      });

      this.logger.log(`Email sent successfully. Message ID: ${info.messageId}`);
      return info;
    } catch (error) {
      this.logger.error('Failed to send email:', error);
      if (error instanceof Error) {
        this.logger.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
        });
      }
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}
