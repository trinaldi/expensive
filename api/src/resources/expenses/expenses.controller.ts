import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from '../expenses/entities/expense.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto): Promise<Expense> {
    return this.expensesService.create(createExpenseDto);
  }

  @Get()
  findAll(): Promise<Expense[]> {
    return this.expensesService.findAll();
  }

  //  @Get(':id')
  //  findOne(@Param('id') id: string): Promise<Expense> {
  //    return this.expensesService.findOne(+id);
  //  }

  //  @Delete(':id')
  //  remove(@Param('id') id: string): Promise<void> {
  //    return this.expensesService.remove(+id);
  //  }
}
