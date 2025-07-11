import { Test, TestingModule } from '@nestjs/testing';
import { BudgetitemsController } from './budgetitems.controller';
import { BudgetitemsService } from './budgetitems.service';

describe('BudgetitemsController', () => {
  let controller: BudgetitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetitemsController],
      providers: [BudgetitemsService],
    }).compile();

    controller = module.get<BudgetitemsController>(BudgetitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
