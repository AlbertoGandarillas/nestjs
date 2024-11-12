import { Test, TestingModule } from '@nestjs/testing';
import { PotentialSavingsService } from './potential-savings.service';

describe('PotentialSavingsService', () => {
  let service: PotentialSavingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotentialSavingsService],
    }).compile();

    service = module.get<PotentialSavingsService>(PotentialSavingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
