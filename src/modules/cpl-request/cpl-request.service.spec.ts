import { Test, TestingModule } from '@nestjs/testing';
import { CplRequestService } from './cpl-request.service';

describe('CplRequestService', () => {
  let service: CplRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CplRequestService],
    }).compile();

    service = module.get<CplRequestService>(CplRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
