import { Test, TestingModule } from '@nestjs/testing';
import { SendCplRequestController } from './send-cpl-request.controller';
import { SendCplRequestService } from './send-cpl-request.service';

describe('SendCplRequestController', () => {
  let controller: SendCplRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendCplRequestController],
      providers: [SendCplRequestService],
    }).compile();

    controller = module.get<SendCplRequestController>(SendCplRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
