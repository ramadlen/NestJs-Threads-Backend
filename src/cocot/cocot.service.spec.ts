import { Test, TestingModule } from '@nestjs/testing';
import { CocotService } from './cocot.service';

describe('CocotService', () => {
  let service: CocotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocotService],
    }).compile();

    service = module.get<CocotService>(CocotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
