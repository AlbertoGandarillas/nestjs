import { Test, TestingModule } from '@nestjs/testing';
import { MostCommonCrsController } from './most-common-crs.controller';
import { MostCommonCrsService } from './most-common-crs.service';

describe('MostCommonCrsController', () => {
  let controller: MostCommonCrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MostCommonCrsController],
      providers: [MostCommonCrsService],
    }).compile();

    controller = module.get<MostCommonCrsController>(MostCommonCrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
