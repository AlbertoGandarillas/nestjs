import { Test, TestingModule } from '@nestjs/testing';
import { CplRequestController } from './cpl-request.controller';
import { CplRequestService } from './cpl-request.service';

describe('CplRequestController', () => {
  let controller: CplRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CplRequestController],
      providers: [CplRequestService],
    }).compile();

    controller = module.get<CplRequestController>(CplRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
