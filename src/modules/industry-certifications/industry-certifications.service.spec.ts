import { Test, TestingModule } from '@nestjs/testing';
import { IndustryCertificationsService } from './industry-certifications.service';

describe('IndustryCertificationsService', () => {
  let service: IndustryCertificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndustryCertificationsService],
    }).compile();

    service = module.get<IndustryCertificationsService>(IndustryCertificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
