import { Test, TestingModule } from '@nestjs/testing';
import { CplCoursesService } from './cpl-courses.service';

describe('CplCoursesService', () => {
  let service: CplCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CplCoursesService],
    }).compile();

    service = module.get<CplCoursesService>(CplCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
