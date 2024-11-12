import { Test, TestingModule } from '@nestjs/testing';
import { MostCommonTopcodesController } from './most-common-topcodes.controller';
import { MostCommonTopcodesService } from './most-common-topcodes.service';

describe('MostCommonTopcodesController', () => {
  let controller: MostCommonTopcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MostCommonTopcodesController],
      providers: [MostCommonTopcodesService],
    }).compile();

    controller = module.get<MostCommonTopcodesController>(MostCommonTopcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
