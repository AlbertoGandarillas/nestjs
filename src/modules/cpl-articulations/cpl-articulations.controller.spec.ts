import { Test, TestingModule } from '@nestjs/testing';
import { CplArticulationsController } from './cpl-articulations.controller';
import { CplArticulationsService } from './cpl-articulations.service';

describe('CplArticulationsController', () => {
  let controller: CplArticulationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CplArticulationsController],
      providers: [CplArticulationsService],
    }).compile();

    controller = module.get<CplArticulationsController>(CplArticulationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
