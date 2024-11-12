import { Test, TestingModule } from '@nestjs/testing';
import { MostCommonCidsService } from './most-common-cids.service';

describe('MostCommonCidsService', () => {
  let service: MostCommonCidsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MostCommonCidsService],
    }).compile();

    service = module.get<MostCommonCidsService>(MostCommonCidsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
