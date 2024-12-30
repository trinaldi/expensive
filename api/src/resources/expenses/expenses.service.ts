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

  findAll() {
    return this.expenseRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
