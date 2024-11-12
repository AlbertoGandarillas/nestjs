import { Test, TestingModule } from '@nestjs/testing';
import { CplLearningModesController } from './cpl-learning-modes.controller';
import { CplLearningModesService } from './cpl-learning-modes.service';

describe('CplLearningModesController', () => {
  let controller: CplLearningModesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CplLearningModesController],
      providers: [CplLearningModesService],
    }).compile();

    controller = module.get<CplLearningModesController>(CplLearningModesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
