import { IsString, IsNumber, IsEmail } from 'class-validator';

export class ResponseUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
