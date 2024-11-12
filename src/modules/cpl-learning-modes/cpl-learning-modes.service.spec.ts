import { Test, TestingModule } from '@nestjs/testing';
import { CplLearningModesService } from './cpl-learning-modes.service';

describe('CplLearningModesService', () => {
  let service: CplLearningModesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CplLearningModesService],
    }).compile();

    service = module.get<CplLearningModesService>(CplLearningModesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
