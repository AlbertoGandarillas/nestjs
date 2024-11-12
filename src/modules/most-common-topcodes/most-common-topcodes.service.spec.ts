import { Test, TestingModule } from '@nestjs/testing';
import { MostCommonTopcodesService } from './most-common-topcodes.service';

describe('MostCommonTopcodesService', () => {
  let service: MostCommonTopcodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MostCommonTopcodesService],
    }).compile();

    service = module.get<MostCommonTopcodesService>(MostCommonTopcodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
