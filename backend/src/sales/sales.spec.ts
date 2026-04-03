import { Test, TestingModule } from '@nestjs/testing';
import { Sales } from './sales';

describe('Sales', () => {
  let provider: Sales;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sales],
    }).compile();

    provider = module.get<Sales>(Sales);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
