import { Module } from '@nestjs/common';
import { ExpensesController } from './resources/expenses/expenses.controller';
import { UsersController } from './resources/users/users.controller';
import { ExpensesService } from './resources/expenses/expenses.service';
import { UsersService } from './resources/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './resources/expenses/entities/expense.entity';
import { User } from './resources/users/entities/user.entity';
import { config } from 'dotenv';
import { dataSourceOptions } from './db/data-source';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Expense, User]),
  ],
  controllers: [ExpensesController, UsersController],
  providers: [ExpensesService, UsersService],
  exports: [ExpensesService, UsersService],
})
export class AppModule {}
