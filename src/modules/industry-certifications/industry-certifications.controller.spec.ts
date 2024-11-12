import { Test, TestingModule } from '@nestjs/testing';
import { IndustryCertificationsController } from './industry-certifications.controller';
import { IndustryCertificationsService } from './industry-certifications.service';

describe('IndustryCertificationsController', () => {
  let controller: IndustryCertificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndustryCertificationsController],
      providers: [IndustryCertificationsService],
    }).compile();

    controller = module.get<IndustryCertificationsController>(IndustryCertificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
