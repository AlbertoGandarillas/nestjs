import { Test, TestingModule } from '@nestjs/testing';
import { MostCommonCrsService } from './most-common-crs.service';

describe('MostCommonCrsService', () => {
  let service: MostCommonCrsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MostCommonCrsService],
    }).compile();

    service = module.get<MostCommonCrsService>(MostCommonCrsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
