import { Test, TestingModule } from '@nestjs/testing';
import { UiSettingsController } from './ui-settings.controller';
import { UiSettingsService } from './ui-settings.service';

describe('UiSettingsController', () => {
  let controller: UiSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UiSettingsController],
      providers: [UiSettingsService],
    }).compile();

    controller = module.get<UiSettingsController>(UiSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
