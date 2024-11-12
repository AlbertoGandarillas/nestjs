import { Test, TestingModule } from '@nestjs/testing';
import { SendCplRequestService } from './send-cpl-request.service';

describe('SendCplRequestService', () => {
  let service: SendCplRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendCplRequestService],
    }).compile();

    service = module.get<SendCplRequestService>(SendCplRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
