import { Test, TestingModule } from '@nestjs/testing';
import { BudgetitemsService } from './budgetitems.service';

describe('BudgetitemsService', () => {
  let service: BudgetitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetitemsService],
    }).compile();

    service = module.get<BudgetitemsService>(BudgetitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
