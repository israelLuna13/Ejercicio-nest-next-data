import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsDetailsController } from './transactions_details.controller';
import { TransactionsDetailsService } from './transactions_details.service';

describe('TransactionsDetailsController', () => {
  let controller: TransactionsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsDetailsController],
      providers: [TransactionsDetailsService],
    }).compile();

    controller = module.get<TransactionsDetailsController>(TransactionsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
