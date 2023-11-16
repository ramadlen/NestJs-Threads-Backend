import { Test, TestingModule } from '@nestjs/testing';
import { PenggunaService } from './pengguna.service';

describe('PenggunaService', () => {
  let service: PenggunaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenggunaService],
    }).compile();

    service = module.get<PenggunaService>(PenggunaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
