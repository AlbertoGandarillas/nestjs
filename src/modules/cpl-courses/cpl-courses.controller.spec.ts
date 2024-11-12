import { Test, TestingModule } from '@nestjs/testing';
import { CplCoursesController } from './cpl-courses.controller';
import { CplCoursesService } from './cpl-courses.service';

describe('CplCoursesController', () => {
  let controller: CplCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CplCoursesController],
      providers: [CplCoursesService],
    }).compile();

    controller = module.get<CplCoursesController>(CplCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
