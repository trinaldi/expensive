import { Module } from '@nestjs/common';
import { ExpensesController } from './resources/expenses/expenses.controller';
import { UsersController } from './resources/users/users.controller';
import { ExpensesService } from './resources/expenses/expenses.service';
import { UsersService } from './resources/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './resources/expenses/entities/expense.entity';
import { User } from './resources/users/entities/user.entity';
import { config } from 'dotenv';
import { dbdatasource } from './db/data.source';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot(dbdatasource),
    TypeOrmModule.forFeature([Expense, User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ExpensesController, UsersController, AuthController],
  providers: [ExpensesService, UsersService, AuthService],
  exports: [ExpensesService, UsersService, AuthService],
})
export class AppModule {}
