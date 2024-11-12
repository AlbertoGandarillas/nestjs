import { Test, TestingModule } from '@nestjs/testing';
import { CplArticulationsService } from './cpl-articulations.service';

describe('CplArticulationsService', () => {
  let service: CplArticulationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CplArticulationsService],
    }).compile();

    service = module.get<CplArticulationsService>(CplArticulationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
