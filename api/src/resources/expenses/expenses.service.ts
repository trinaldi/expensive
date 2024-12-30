import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from '../expenses/entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createExpenseDto: CreateExpenseDto) {
    const user = await this.userRepository.findOne({
      where: { id: createExpenseDto.userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const expense = this.expenseRepository.create(createExpenseDto);
    expense.user = user;
    return this.expenseRepository.save(expense);
  }

  async findAll() {
    return this.expenseRepository.find();
  }

  async findOne(id: number) {
    return this.expenseRepository.findOne({ where: { id } });
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.expenseRepository.findOne({ where: { id } });

    if (!expense) {
      throw new NotFoundException('Expense not found');
    }

    await this.expenseRepository.update(id, updateExpenseDto);
    return this.expenseRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.expenseRepository.delete(id);
  }
}
