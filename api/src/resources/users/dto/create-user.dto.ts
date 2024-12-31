import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
  IsEmail,
} from 'class-validator';
import { Expense } from 'src/resources/expenses/entities/expense.entity';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsArray()
  @Transform(({ value }) => value ?? null)
  expenses: Expense[] | null;
}
