import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsDate,
} from 'class-validator';

export class ExpenseDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  userId: number;
}
