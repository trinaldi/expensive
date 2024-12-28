import { AppDataSource } from '../config/typeorm.config';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async createUser(name: string, email: string, password: string) {
    const newUser = this.userRepository.create({ name, email, password });
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async validatePassword(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    return user;
  }
}
