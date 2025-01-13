import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Expense } from '../expenses/entities/expense.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, ...dto } = createUserDto;

    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new ConflictException('Email already in use');
    }

    const hashedPassword = await this.hashPassword(password);
    const userToBe = { ...dto, email, password: hashedPassword };

    return await this.userRepository.save(userToBe);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({ relations: ['expenses'] });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['expenses'],
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { email, password, ...dto } = updateUserDto;
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const hashedPassword = await this.hashPassword(password);
    const updatedUser = { ...dto, email, password: hashedPassword };

    await this.userRepository.update(id, updatedUser);
    return await this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
}
