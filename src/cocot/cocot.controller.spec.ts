import { Test, TestingModule } from '@nestjs/testing';
import { CocotController } from './cocot.controller';
import { CocotService } from './cocot.service';

describe('CocotController', () => {
  let controller: CocotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocotController],
      providers: [CocotService],
    }).compile();

    controller = module.get<CocotController>(CocotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
