import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsDate,
  IsString,
} from 'class-validator';

export class UpdateExpenseDto {
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
