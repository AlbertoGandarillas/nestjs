import { PartialType } from '@nestjs/swagger';
import { CreateCPLRequestDto } from './create-cpl-request.dto';

export class UpdateCPLRequestDto extends PartialType(CreateCPLRequestDto) {}
