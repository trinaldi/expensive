import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { AppLogger } from '../logger/logger.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly logger: AppLogger,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, ...dto } = createUserDto;

    const user = await this.findByEmail(email);
    this.checkUser(user);

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
    const user = await this.findOne(id);

    this.checkUser(user);

    const hashedPassword = await this.hashPassword(password);
    const updatedUser = { ...dto, email, password: hashedPassword };

    await this.userRepository.update(id, updatedUser);
    return await this.findOne(id);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  private checkUser(user: User): void {
    if (user) {
      this.logger.error('User already exists');
      throw new ConflictException('User already exists');
    } else {
      this.logger.error('User not found');
      throw new NotFoundException('User not found');
    }
  }
}
