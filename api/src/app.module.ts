import { Module } from '@nestjs/common';
import { ExpensesController } from './resources/expenses/expenses.controller';
import { UsersController } from './resources/users/users.controller';
import { ExpensesService } from './resources/expenses/expenses.service';
import { UsersService } from './resources/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './resources/expenses/entities/expense.entity';
import { User } from './resources/users/entities/user.entity';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/resources/**/*.entity.js'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Expense, User]),
  ],
  controllers: [ExpensesController, UsersController],
  providers: [ExpensesService, UsersService],
  exports: [ExpensesService, UsersService],
})
export class AppModule {}
