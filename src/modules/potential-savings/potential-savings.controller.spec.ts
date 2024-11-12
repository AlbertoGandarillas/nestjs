import { Test, TestingModule } from '@nestjs/testing';
import { PotentialSavingsController } from './potential-savings.controller';
import { PotentialSavingsService } from './potential-savings.service';

describe('PotentialSavingsController', () => {
  let controller: PotentialSavingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotentialSavingsController],
      providers: [PotentialSavingsService],
    }).compile();

    controller = module.get<PotentialSavingsController>(PotentialSavingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
