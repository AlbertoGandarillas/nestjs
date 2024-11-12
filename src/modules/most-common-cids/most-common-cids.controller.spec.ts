import { Test, TestingModule } from '@nestjs/testing';
import { MostCommonCidsController } from './most-common-cids.controller';
import { MostCommonCidsService } from './most-common-cids.service';

describe('MostCommonCidsController', () => {
  let controller: MostCommonCidsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MostCommonCidsController],
      providers: [MostCommonCidsService],
    }).compile();

    controller = module.get<MostCommonCidsController>(MostCommonCidsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
